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

    it("About link should update href for about me page", () => {
      cy.get("#about-link").should("have.attr", "href", "/about-me");
    });

    it("Home link should update href for home", () => {
      cy.get("#home-link").should("have.attr", "href", "/");
    });

    it("Project link should update href for projects page", () => {
      cy.get("#projects-link").should("have.attr", "href", "/projects");
    });

    it("Skills link should update href for skills page", () => {
      cy.get("#skills-link").should("have.attr", "href", "/skills");
    });
  });
});
