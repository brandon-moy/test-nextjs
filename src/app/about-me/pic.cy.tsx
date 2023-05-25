import * as ImageComponent from "next/image";
import Pic from "./pic";

describe("<Pic />", () => {
  describe("mock image with `cy.intercept`", () => {
    it("renders", () => {
      // Grab image file that this component relies on
      cy.readFile("public/brandon-moy.jpg", null).then((img) => {
        // Intercept requests to Next backend image endpoint and return expected image
        cy.intercept("_next/image*", {
          statusCode: 200,
          headers: {
            "Content-Type": "image/jpg",
          },
          body: img.buffer,
        });
        cy.mount(
          <div style={{ backgroundColor: "lightgray" }}>
            <Pic />
          </div>
        );
      });
    });
  });

  describe("mock image with component override", () => {
    const OriginalImageComponent = ImageComponent.default;

    beforeEach(() =>
      // This block could be extracted into the component testing support file so
      // it is applied to all component tests
      Object.defineProperty(ImageComponent, "default", {
        configurable: true,
        // sorry about the any type
        value: (props: any) => {
          console.log("props", props);
          return <OriginalImageComponent {...props} unoptimized />;
        },
      })
    );

    it("renders", () => {
      cy.mount(
        <div style={{ backgroundColor: "lightgray" }}>
          <Pic />
        </div>
      );
    });

    afterEach(() => {
      Object.defineProperty(ImageComponent, "default", {
        configurable: true,
        value: OriginalImageComponent,
      });
    });
  });
});
