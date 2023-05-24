import NavBar from "./navbar";

describe("Render navbar", () => {
  context("1280p resolution", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.mount(<NavBar />);
    });

    it("Render links on the navbar", () => {
      cy.get("#home-link").should("be.visible");
      cy.get("#about-link").should("be.visible");
      cy.get("#projects-link").should("be.visible");
      cy.get("#skills-link").should("be.visible");
    });

    it("Links should have correct href to navigate to pages", () => {
      cy.get("#home-link").should("have.attr", "href", "/");
      cy.get("#about-link").should("have.attr", "href", "/about-me");
      cy.get("#projects-link").should("have.attr", "href", "/projects");
      cy.get("#skills-link").should("have.attr", "href", "/skills");
    });
  });
});
