class ExpensesForm {

    get mileage() {
        return cy.get('#addExpenseMileage');
    }
    get liters() {
        return cy.get('#addExpenseLiters');
    }
    get costs() {
        return cy.get('#addExpenseTotalCost');
    }
    get addButton() {
        return cy.get('button.btn-primary').contains(/^Add$/);

    }
    get plusMileage() {
        return cy.get('#addExpenseMileage').type('{uparrow}');
    }
    
    };
    
    export default new ExpensesForm();