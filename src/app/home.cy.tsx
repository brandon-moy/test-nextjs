import RootLayout from "./layout";
import Home from "./page";

describe("Renders the Home application page", () => {
  context("1280p resolution", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.mount(
        <RootLayout>
          <Home></Home>
        </RootLayout>
      );
    });

    it("Renders the navbar", () => {
      it("Render links on the navbar", () => {
        cy.get("[data-cy='home-link']")
          .should("be.visible")
          .and("have.attr", "href", "/");
        cy.get("[data-cy='about-link']")
          .should("be.visible")
          .and("have.attr", "href", "/about-me");
        cy.get("[data-cy='projects-link']")
          .should("be.visible")
          .and("have.attr", "href", "/projects");
        cy.get("[data-cy='skills-link']")
          .should("be.visible")
          .and("have.attr", "href", "/skills");
      });
    });

    it("Renders the name", () => {
      cy.get("[data-cy='header-name']").should("be.visible");
    });

    it("Checks the animations", () => {
      cy.get("[data-cy='animate-software-engineer']")
        .should("be.visible")
        .wait(4000, { log: false });
      cy.get("[data-cy='animate-css-artist']")
        .should("be.visible")
        .wait(4000, { log: false });
      cy.get("[data-cy='animate-front-end-dev']")
        .should("be.visible")
        .wait(4000, { log: false });
      cy.get("[data-cy='animate-prog']")
        .should("be.visible")
        .wait(4000, { log: false });
      cy.get("[data-cy='animate-web-dev']")
        .should("be.visible")
        .wait(4000, { log: false });
    });
  });
});
