import * as React from "react";
import * as ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Hello from "components/Hello";

describe("Hello", () => {
    it("renders without errors", () => {
        const component = renderer.create(
            <Hello name="Simple App" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});