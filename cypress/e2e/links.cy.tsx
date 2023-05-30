describe("Tests for the navlinks", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("localhost:3000");
  });

  it("Tests the About Me link", () => {
    cy.get("#about-link").should("be.visible").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/about-me");
    });

    cy.get("#text-container").should("be.visible");

    cy.get("#home-link").should("be.visible").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/");
    });
  });

  it("Tests the projects link", () => {
    cy.get("#projects-link").should("be.visible").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/projects");
    });

    cy.get("div").contains("project").should("be.visible");

    cy.get("#home-link").should("be.visible").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/");
    });
  });

  it("Tests the skills link", () => {
    cy.get("#skills-link").should("be.visible").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/skills");
    });

    cy.get("div").contains("skills").should("be.visible");

    cy.go("back");
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/");
    });
  });
});
