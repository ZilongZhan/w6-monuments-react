import { render, screen } from "@testing-library/react";
import MonumentForm from "./MonumentForm";

describe("Given the MonumentForm component", () => {
  describe("When it renders", () => {
    test("Then it should show 'New Monument'", () => {
      render(<MonumentForm />);

      const legend = screen.getByRole("group", { name: /new monument/i });

      expect(legend).toBeVisible();
    });

    test("Then it should show a 'Name:' input", () => {
      render(<MonumentForm />);

      const nameInput = screen.getByLabelText(/name:/i);

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
});
