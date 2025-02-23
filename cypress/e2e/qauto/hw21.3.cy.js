describe("Private Request", () => {
    let sidGlobal;
    let carId;
    before(() => {
      cy.api("POST", "/api/auth/signin", {
        email: Cypress.env("LOGIN"),
        password: Cypress.env("PASSWORD"),
      }).then((response) => {
        const cookie = response.headers["set-cookie"][0];
        const sid = cookie.split(";")[0].split("=")[1];
        cy.log(sid);
        sidGlobal = sid;
      });
    });
    //Add car
    it("Add new car [/api/cars]", () => {
      cy.api({
        method: "POST",
        url: "/api/cars",
        body: {
          carBrandId: 1,
          carModelId: 1,
          mileage: 10,
        },
        headers: {
          Cookie: `sid=${sidGlobal}`,
        },
      }).then((response) => {
        cy.log(JSON.stringify(response.body.data));
        carId = JSON.stringify(response.body.data.id);
        cy.log(carId); //витягнути айді машинки
        expect(response.body.data.brand).eq("Audi");
        expect(response.body.data.model).eq("TT");
        expect(response.status).eq(201);
      });
    });
  
    //Get all cars
    it("Get all cars [/api/cars]", () => {
      cy.api({
        method: "GET",
        url: "/api/cars",
        headers: {
          Cookie: `sid=${sidGlobal}`,
        },
      }).then((response) => {
        cy.log(JSON.stringify(response.body.data));
        cy.wrap(response.body.data.length).should("be.greaterThan", 0);
        expect(response.status).eq(200);
      });
    });
  
    //Get car ny ID
    it("Get car ny ID [/api/cars/:id]", () => {
      cy.log(carId);
      cy.api({
        method: "GET",
        url: `/api/cars/${carId}`,
        headers: {
          Cookie: `sid=${sidGlobal}`,
        },
      }).then((response) => {
        cy.log(JSON.stringify(response.body.data));
  
        expect(String(response.body.data.id)).eq(String(carId));
        expect(response.status).eq(200);
      });
    });
  
    //Edit car
    it("Edit existing car [/api/cars]", () => {
      cy.api({
        method: "PUT",
        url: `/api/cars/${carId}`,
        body: {
          carBrandId: 1,
          carModelId: 1,
          mileage: 200,
        },
        headers: {
          Cookie: `sid=${sidGlobal}`,
        },
      }).then((response) => {
        cy.log(JSON.stringify(response.body.data));
        expect(response.body.data.mileage).eq(200);
        expect(response.status).eq(200);
      });
    });
  
    //Delete car
    it("Delete car ny ID [/api/cars/:id]", () => {
      cy.api({
        method: "DELETE",
        url: `/api/cars/${carId}`,
        headers: {
          Cookie: `sid=${sidGlobal}`,
        },
      }).then((response) => {
        cy.log(JSON.stringify(response.body.data));
        expect(String(response.body.data.carId)).eq(String(carId));
        expect(response.status).eq(200);
      });
    });
  });
  