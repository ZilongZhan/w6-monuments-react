import { render, screen } from "@testing-library/react";
import MonumentForm from "./MonumentForm";
import userEvent from "@testing-library/user-event";

describe("Given the MonumentForm component", () => {
  describe("When it renders", () => {
    test("Then it should show 'New monument' inside a heading", () => {
      render(<MonumentForm />);

      const formTitle = screen.getByRole("heading", { name: /new monument/i });

      expect(formTitle).toBeVisible();
    });

    test("Then it should show a 'Name:' input", () => {
      render(<MonumentForm />);

      const nameInput = screen.getByLabelText(/^name/i);

      expect(nameInput).toBeVisible();
    });

    test("Then it should show a 'Create monument' button", () => {
      render(<MonumentForm />);

      const createMonumentButton = screen.getByRole("button", {
        name: /create monument/i,
      });

      expect(createMonumentButton).toBeVisible();
    });
  });

  describe("When the user types 'Hello World' inside 'Name' input", () => {
    test("Then it should show 'Hello World' inside 'Name' input", async () => {
      const expectedInput = "Hello World";

      render(<MonumentForm />);

      const nameInput = screen.getByLabelText(/^name/i);

      await userEvent.type(nameInput, expectedInput);

      expect(nameInput).toHaveValue(expectedInput);
    });
  });
});
