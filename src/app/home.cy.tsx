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
      cy.get("[data-cy='animate-0']")
        .should("be.visible")
        .wait(4000, { log: false });
      cy.get("[data-cy='animate-1']")
        .should("be.visible")
        .wait(4000, { log: false });
      cy.get("[data-cy='animate-2']")
        .should("be.visible")
        .wait(4000, { log: false });
      cy.get("[data-cy='animate-3']")
        .should("be.visible")
        .wait(4000, { log: false });
      cy.get("[data-cy='animate-4']")
        .should("be.visible")
        .wait(4000, { log: false });
    });
  });
});
