/* eslint-disable no-undef */
describe("Main Page", function () {
  it("header displayed successfully", function () {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy=header]").should("be.visible");
    cy.wait(5000);
    cy.get("[data-cy=header-time]").should("be.visible");
  });

  it("insert city successfully", function () {
    cy.get("[data-cy=form]").should("be.visible");
    cy.get("[data-cy=form-button]").should("be.disabled");
    cy.get("[data-cy=form-city]")
      .should("be.visible")
      .click()
      .type("Los Angeles");
    cy.get("[data-cy=form-label]").should("be.visible").click().type("HQ");
    cy.get("[data-cy=form-button]").should("be.enabled").click();
    cy.wait(5000);
  });

  it("insert same city", function () {
    cy.get("[data-cy=form-city]")
      .should("be.visible")
      .click()
      .type("Los Angeles");
    cy.get("[data-cy=form-label]").should("be.visible").click().type("Home");
    cy.get("[data-cy=form-button]").should("be.enabled").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`city is inserted`);
    });
  });

  it("insert more city", function () {
    cy.get("[data-cy=form-city]").should("be.visible").click().type("Sydney");
    cy.get("[data-cy=form-button]").should("be.enabled").click();
    cy.wait(5000);
    cy.get("[data-cy=form-city]")
      .should("be.visible")
      .click()
      .type("Melbourne");
    cy.get("[data-cy=form-button]").should("be.enabled").click();
    cy.wait(5000);
    cy.get("[data-cy=form-city]").should("be.visible").click().type("Tokyo");
    cy.get("[data-cy=form-button]").should("be.enabled").click();
    cy.wait(10000);
    cy.get("[data-cy=form-button]").should("be.disabled");
  });

  it("delete city", function () {
    cy.wait(5000);
    cy.get("[data-cy=clock-card]").should("be.visible");
    cy.get("[data-cy=delete-button]").should("be.visible").first().click();
  });
});
