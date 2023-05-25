import AboutMe from "./about-me/page";
import RootLayout from "./layout";

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

    it("Renders the page", () => {});
  });
});
