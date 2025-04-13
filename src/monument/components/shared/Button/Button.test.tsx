import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it receives 'Hello World and an action", () => {
    const expectedButtonText = "Hello World";

    test("Then it should show a 'Hello World' button", () => {
      render(<Button>{expectedButtonText}</Button>);

      const buttonElement = screen.getByRole("button", {
        name: /hello world/i,
      });

      expect(buttonElement).toBeVisible();
    });

    describe("And the user clicks the 'Hello World' button", () => {
      test("Then the action should be called", async () => {
        const user = userEvent.setup();
        const action = vitest.fn();

        render(<Button action={action}>{expectedButtonText}</Button>);

        const buttonElement = screen.getByRole("button", {
          name: /hello world/i,
        });

        await user.click(buttonElement);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
