describe("Find buttons", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });
  //Header
  it("Home button", () => {
    cy.contains(".btn", "Home");
  });

  it("About button", () => {
    cy.contains(".btn", "About");
  });

  it("Contacts button", () => {
    cy.contains(".btn", "Contacts");
  });

  it("Guest log in button", () => {
    cy.contains(".header-link", "Guest log in");
  });

  it("Sign Up button", () => {
    cy.contains(".btn", "Sign up");
  });

  it("Sign In button", () => {
    cy.contains(".btn", "Sign In");
  });

  //Footer

  it("Facebook button", () => {
    cy.get(".socials_icon").first();
  });

  it("Telegram button", () => {
    cy.get(".socials_icon").eq(1);
  });

  it("YouTube button", () => {
    cy.get(".socials_icon").eq(2);
  });

  it("Instagram button", () => {
    cy.get(".socials_icon").eq(3);
  });

  it("LinkedIn button", () => {
    cy.get(".socials_icon").last();
  });

  it("ithillel link", () => {
    cy.contains(".contacts_link", "ithillel.ua");
  });

  it("support ithillel link", () => {
    cy.contains(".contacts_link", "support@ithillel.ua");
  });
});