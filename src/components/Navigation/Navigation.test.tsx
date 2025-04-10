import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";
import { render, screen } from "@testing-library/react";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Home' link", () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>,
      );

      const homeLink = screen.getByRole("link", { name: /home/i });

      expect(homeLink).toBeVisible();
    });
  });
});
