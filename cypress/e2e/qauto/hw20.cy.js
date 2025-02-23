import HomePage from "../../pageObjects/pages/HomePage.js";
import Login from "../../pageObjects/forms/Login.js";
import Garage from "../../pageObjects/pages/Garage.js";
import Expenses from "../../pageObjects/pages/Expenses.js";
import ExpensesForm from "../../pageObjects/forms/ExpensesForm.js";

describe("Autotests Using DOM", () => {
  let user_password = Cypress.env("PASSWORD");
  let user_login = Cypress.env("LOGIN");
  beforeEach(() => {
    HomePage.openPage();
    Login.login(user_login, user_password);
  });

  it("Add car", () => {
    Garage.addCarButtonClick();
    Garage.selectCarBrand("BMW");
    Garage.selectCarModel("5");
    Garage.selectAddCarMileage("1");
    Garage.addCarButtonConfirmClick();
  });

  it("Fill expenses", () => {
    Expenses.openExpensesPage();
    Expenses.openAddExpenseForm();
    ExpensesForm.mileage.click();
    ExpensesForm.plusMileage.click();
    ExpensesForm.liters.type(10);
    ExpensesForm.costs.type(50);
    ExpensesForm.addButton.click();
  });

  it("Check changes litres", () => {
    Expenses.openExpensesPage();
    Expenses.litersUsed
      .invoke("text") // Отримуємо текст елемента
      .then((text) => {
        const cellValue = text.trim(); // Очищаємо від зайвих пробілів
        cy.log(`Cell value: ${cellValue}`); // Виводимо значення в лог
        expect(cellValue).to.equal("10L"); // Перевіряємо значення
      });
  });
  it("Check changes price", () => {
    Expenses.openExpensesPage();
    Expenses.totalCost
      .invoke("text") // Отримуємо текст елемента
      .then((text) => {
        const cellValue = text.trim(); // Очищаємо від зайвих пробілів
        cy.log(`Cell value: ${cellValue}`); // Виводимо значення в лог
        expect(cellValue).to.equal("50 USD"); // Перевіряємо значення
      });
  });
});
