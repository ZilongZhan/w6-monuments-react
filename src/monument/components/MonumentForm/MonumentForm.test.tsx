import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import MonumentForm from "./MonumentForm";
import MonumentsContextProvider from "../../context/MonumentsContextProvider";

describe("Given the MonumentForm component", () => {
  describe("When it renders", () => {
    test("Then it should show 'New monument' inside a heading", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentForm />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const formTitle = screen.getByRole("heading", { name: /new monument/i });

      expect(formTitle).toBeVisible();
    });

    test("Then it should show a 'Name:' input", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentForm />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const nameInput = screen.getByLabelText(/^name/i);

      expect(nameInput).toBeVisible();
    });

    test("Then it should show a 'Create monument' button", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentForm />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const createMonumentButton = screen.getByRole("button", {
        name: /create monument/i,
      });

      expect(createMonumentButton).toBeVisible();
    });
  });

  describe("When the user types 'Hello World' inside 'Name' input", () => {
    test("Then it should show 'Hello World' inside 'Name' input", async () => {
      const expectedInput = "Hello World";

      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentForm />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const nameInput = screen.getByLabelText(/^name/i);

      await userEvent.type(nameInput, expectedInput);

      expect(nameInput).toHaveValue(expectedInput);
    });
  });
});
