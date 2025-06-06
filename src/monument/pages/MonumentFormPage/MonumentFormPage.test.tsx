import { render, screen } from "@testing-library/react";
import MonumentFormPage from "./MonumentFormPage";
import AllContextsProvider from "../../../test-utils/AllContextsProvider/AllContextsProvider";

describe("Given the MonumentFormPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Add new monument' inside a heading", () => {
      render(<MonumentFormPage />, { wrapper: AllContextsProvider });

      const pageTitle = screen.getByRole("heading", {
        name: /add new monument/i,
      });

      expect(pageTitle).toBeVisible();
    });

    test("Then it should show a form to add monuments", () => {
      render(<MonumentFormPage />, { wrapper: AllContextsProvider });

      const monumentForm = screen.getByRole("form", {
        name: /add monument form/i,
      });

      expect(monumentForm).toBeVisible();
    });
  });
});
