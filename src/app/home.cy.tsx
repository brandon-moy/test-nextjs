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
        cy.get("#home-link").should("be.visible").and("have.attr", "href", "/");
        cy.get("#about-link")
          .should("be.visible")
          .and("have.attr", "href", "/about-me");
        cy.get("#projects-link")
          .should("be.visible")
          .and("have.attr", "href", "/projects");
        cy.get("#skills-link")
          .should("be.visible")
          .and("have.attr", "href", "/skills");
      });
    });

    it("Renders the name", () => {
      cy.get("#header-name").should("be.visible");
    });

    it("Checks the animations", () => {
      cy.contains("Software Engineer")
        .should("be.visible")
        .wait(4000, { log: false });
      cy.contains("CSS Artist").should("be.visible").wait(4000, { log: false });
      cy.contains("Front-End Developer")
        .should("be.visible")
        .wait(4000, { log: false });
      cy.contains("Programmer").should("be.visible").wait(4000, { log: false });
      cy.contains("Web Developer")
        .should("be.visible")
        .wait(4000, { log: false });
    });
  });
});
