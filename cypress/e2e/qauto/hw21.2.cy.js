import HomePage from "../../pageObjects/pages/HomePage.js";
import Login from "../../pageObjects/forms/Login.js";

describe("Fake user mockUp", () => {
  let user_password = Cypress.env("PASSWORD");
  let user_login = Cypress.env("LOGIN");

  it("Fake user", () => {
    const profileFakeResp =
      {
        status: "ok",
        data: {
          userId: 181730,
          photoFilename: "default-user.png",
          name: "Polar",
          lastName: "Bear",
        },
      };
    HomePage.openPage();
    Login.login(user_login, user_password);
    cy.intercept("**/api/users/profile", profileFakeResp);
    cy.setCookie(
      "sid",
      "s%3AoSthWYmmoVV3asKa96Icn5b7Xvf0W_iy.jYFY8cUHcdaAVGtR5C6iRUBw2Adm2ebtyy9OfobtVyc"
    );
    cy.get('[routerlink="profile"]').click();
    cy.get(".profile_name").contains("Polar Bear");
  });
});
