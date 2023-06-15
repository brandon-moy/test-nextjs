import AboutMe from "../../src/app/about-me/page";
import RootLayout from "../../src/app/layout";

describe("Renders the About Me application page", () => {
  context("1280p resolution", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.mount(
        <RootLayout>
          <AboutMe />
        </RootLayout>
      );
    });

    it("Renders the text information", () => {
      cy.get("[data-cy='about-text-container']").should("be.visible");

      cy.get("[data-cy='about-text-container'] > p").should(($p) => {
        expect($p).to.have.length(6);

        expect($p[0]).to.be.visible;
        expect($p[1]).to.be.visible;
        expect($p[2]).to.be.visible;
        expect($p[3]).to.be.visible;
        expect($p[4]).to.be.visible;
        expect($p[5]).to.be.visible;
      });
    });
  });
});
