
class Expenses {
get expensesPage() {
    return cy.get('[routerlink="expenses"]');
} 
get addExpenseButton() {
    return  cy.contains('button', 'Add an expense');
} 

get litersUsed() {
    return  cy.get("body > app-root > app-global-layout > div > div > div > app-panel-layout > div > div > div > div.col-lg-9.main-wrapper > div > app-fuel-expenses > div > div.panel-page_content > div > div.expenses_table-wrapper > table > tbody > tr > td:nth-child(3)"
    );
}
get totalCost() {
    return  cy.get("body > app-root > app-global-layout > div > div > div > app-panel-layout > div > div > div > div.col-lg-9.main-wrapper > div > app-fuel-expenses > div > div.panel-page_content > div > div.expenses_table-wrapper > table > tbody > tr > td:nth-child(4)"
    );
}




openExpensesPage(){
    this.expensesPage.click();
}

openAddExpenseForm(){
    this.addExpenseButton.click();
}


}

export default new Expenses();