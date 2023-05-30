import NavBar from "./navbar";

describe("Render navbar", () => {
  context("1280p resolution", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.mount(<NavBar />);
    });

    it("Render links on the navbar and have correct hrefs", () => {
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
});
