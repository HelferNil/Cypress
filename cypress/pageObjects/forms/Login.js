class Login {

get signInButton() {
    return cy.get('button.header_signin');
}
get emailField() {
    return cy.get('#signinEmail');
}
get passWordField() {
    return cy.get('#signinPassword');
}
get loginButton() {
    return cy.contains('button', 'Login');
}

login(userEmail, userPassword){
    this.signInButton.click();
    this.emailField.focus().clear().type(userEmail);
    this.passWordField.focus().clear().type(userPassword, { sensitive: true });
    this.loginButton.click();
  };
};

export default new Login();