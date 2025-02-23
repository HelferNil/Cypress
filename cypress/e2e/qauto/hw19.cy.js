//Validations
describe("Find buttons", () => {
    let unicEmail = generateUniqueEmail();
    beforeEach(() => {
      cy.visit("https://qauto.forstudy.space", {
        auth: {
          username: "guest",
          password: "welcome2qauto",
        },
      });
    });
//First name
it('First name', () =>{
    //empty name
    cy.get('.hero-descriptor_btn').click();
    cy.get('#signupName').focus();
    cy.get('#signupName').blur();
    cy.contains('Name required').should('be.visible');
    //short or long
    cy.get('#signupName').focus().clear().type('J');
    cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
    cy.get('#signupName').focus().clear().type('Joooooooooooooooooohn');
    cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
    //Invalid name
    cy.get('#signupName').focus().clear().type('@');
    cy.contains('Name is invalid').should('be.visible');
    //Color red
    cy.wait(2000);
    cy.get('#signupName').should('have.css', 'border-color').and('eq', 'rgb(220, 53, 69)');
});
    
//Last name
it('Last Name', () =>{
    //empty last name
    cy.get('.hero-descriptor_btn').click();
    cy.get('#signupLastName').focus();
    cy.get('#signupLastName').blur();
    cy.contains('Last name required').should('be.visible');
    //short or long
    cy.get('#signupLastName').focus().clear().type('C');
    cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
    cy.get('#signupLastName').focus().clear().type('Ceeeeeeeeeeeeeeeeeena');
    cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
    //Invalid last name
    cy.get('#signupLastName').focus().clear().type('@');
    cy.contains('Last name is invalid').should('be.visible');
    //Color red
    cy.wait(2000);
    cy.get('#signupLastName').should('have.css', 'border-color').and('eq', 'rgb(220, 53, 69)');
});
 
//Email
it('Email', () =>{
    //empty email
    cy.get('.hero-descriptor_btn').click();
    cy.get('#signupEmail').focus();
    cy.get('#signupEmail').blur();
    cy.contains('Email required').should('be.visible');
    //Invalid email
    cy.get('#signupEmail').focus().clear().type('@test');
    cy.contains('Email is incorrect').should('be.visible');
    cy.get('#signupEmail').focus().clear().type('test@test.a');
    cy.contains('Email is incorrect').should('be.visible');
    //Color red
    cy.wait(2000);
    cy.get('#signupEmail').should('have.css', 'border-color').and('eq', 'rgb(220, 53, 69)');
});

//Password
it('Password', () =>{
    //empty password
    cy.get('.hero-descriptor_btn').click();
    cy.get('#signupPassword').focus();
    cy.get('#signupPassword').blur();
    cy.contains('Password required').should('be.visible');
    //Invalid password
    //cy.get('#signupPassword').focus().clear().type('Very1st');
    cy.get('#signupPassword').focus().clear().type('Very1st', { sensitive: true });
    cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
    //cy.get('#signupPassword').focus().clear().type('Very1strongpasswordthaticantremeber');
    cy.get('#signupPassword').focus().clear().type('VerVery1strongpasswordthaticantremebery1st', { sensitive: true });
    cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
    //Color red
    cy.wait(2000);
    cy.get('#signupPassword').should('have.css', 'border-color').and('eq', 'rgb(220, 53, 69)');
});

//Re-password
it('RePassword', () =>{
    //empty password
    cy.get('.hero-descriptor_btn').click();
    cy.get('#signupRepeatPassword').focus();
    cy.get('#signupRepeatPassword').blur();
    cy.contains('Re-enter password required').should('be.visible');
    //Not match password
    cy.get('#signupPassword').focus().clear().type('Very1strong', { sensitive: true });
    cy.get('#signupRepeatPassword').focus().clear().type('Very2strong', { sensitive: true });
    // cy.get('#signupPassword').focus().clear().type('Very1strong');
    // cy.get('#signupRepeatPassword').focus().clear().type('Very2strong');
    cy.get('#signupRepeatPassword').blur();
    cy.contains('Passwords do not match').should('be.visible');
    //Color red
    cy.wait(2000);
    cy.get('#signupRepeatPassword').should('have.css', 'border-color').and('eq', 'rgb(220, 53, 69)');
});

//Submit button
it('Submit', () =>{
    cy.get('.hero-descriptor_btn').click();
    cy.get('button.btn-primary').should('be.disabled');
    cy.get('#signupName').focus().clear().type('John');
    cy.get('#signupLastName').focus().clear().type('Cena');
    cy.get('#signupEmail').focus().clear().type(unicEmail);
    cy.get('#signupPassword').focus().clear().type('Very1strong', {sensitive: true });
    cy.get('#signupRepeatPassword').focus().clear().type('Very1strong', { sensitive: true });
    cy.contains('Register').click();
});


it('Log in', () =>{
    cy.get('button.header_signin').click();
    cy.get('#signinEmail').focus().clear().type(unicEmail);
    cy.get('#signinPassword').focus().clear().type('Very1strong', { sensitive: true });
    cy.contains('button', 'Login').click();
    cy.get('h1').contains('Garage');
});


it.only('Log in 2', () =>{
    login('test1739061026459@test.io','Very1strong');
    cy.get('h1').contains('Garage');
});
});


Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  });

  function generateUniqueEmail() {
    const uniqueIndex = Date.now(); // Використовуємо timestamp для унікальності
    return `test${uniqueIndex}@test.io`;
  };




  function login(userEmail, userPassword){
    cy.get('button.header_signin').click();
    cy.get('#signinEmail').focus().clear().type(userEmail);
    cy.get('#signinPassword').focus().clear().type(userPassword, { sensitive: true });
    cy.contains('button', 'Login').click();
  }
  
  it.only('Log in 2', () =>{
    login('test1739061026459@test.io','Very1strong');
    cy.get('h1').contains('Garage');
});