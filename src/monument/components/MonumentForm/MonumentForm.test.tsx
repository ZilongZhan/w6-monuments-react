import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import MonumentForm from "./MonumentForm";
import AllContextsProvider from "../../../test-utils/AllContextsProvider/AllContextsProvider";

describe("Given the MonumentForm component", () => {
  describe("When it renders", () => {
    test("Then it should show 'New monument' inside a heading", () => {
      render(<MonumentForm />, { wrapper: AllContextsProvider });

      const formTitle = screen.getByRole("heading", { name: /new monument/i });

      expect(formTitle).toBeVisible();
    });

    test("Then it should show a 'Name:' input", () => {
      render(<MonumentForm />, { wrapper: AllContextsProvider });

      const nameInput = screen.getByLabelText(/^name/i);

      expect(nameInput).toBeVisible();
    });

    test("Then it should show a 'Create monument' button", () => {
      render(<MonumentForm />, { wrapper: AllContextsProvider });

      const createMonumentButton = screen.getByRole("button", {
        name: /create monument/i,
      });

      expect(createMonumentButton).toBeVisible();
    });
  });

  describe("When the user types 'Hello World' inside 'Name' input", () => {
    test("Then it should show 'Hello World' inside 'Name' input", async () => {
      const expectedInput = "Hello World";
      const user = userEvent.setup();

      render(<MonumentForm />, { wrapper: AllContextsProvider });

      const nameInput = screen.getByLabelText(/^name/i);

      await user.type(nameInput, expectedInput);

      expect(nameInput).toHaveValue(expectedInput);
    });
  });
});
