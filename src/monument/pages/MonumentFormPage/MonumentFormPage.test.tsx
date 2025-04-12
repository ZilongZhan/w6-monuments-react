import { render, screen } from "@testing-library/react";
import MonumentFormPage from "./MonumentFormPage";
import { MemoryRouter } from "react-router";
import MonumentsContextProvider from "../../context/MonumentsContextProvider";

describe("Given the MonumentFormPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Add new monument' inside a heading", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentFormPage />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: /add new monument/i,
      });

      expect(pageTitle).toBeVisible();
    });

    test("Then it should show a form to add monuments", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentFormPage />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const monumentForm = screen.getByRole("form", {
        name: /add monument form/i,
      });

      expect(monumentForm).toBeVisible();
    });
  });
});
