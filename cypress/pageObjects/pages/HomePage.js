class HomePage {
    get signInButton() {
    return cy.get('.header_signin'); 
    }
    openPage() {

    return cy.visit(Cypress.config('baseURL'))
    }
    openSignInForm() {
        this.signInButton.click(); // Викликаємо click() на геттері
    }
}

export default new HomePage();