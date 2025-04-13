import { MemoryRouter } from "react-router";
import { screen, render } from "@testing-library/react";
import App from "./App";

describe("Given the App componenet", () => {
  describe("When it renders", () => {
    test("Then it should show 'monuments.' inside a level 1 heading", () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const appTitle = screen.getByRole("heading", {
        name: /monuments./i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });

    test("Then it should show a webside logo", () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const pageLogo = screen.getByAltText("Website logo");

      expect(pageLogo).toBeVisible();
    });

    test("Then it should show links to Home and Add Monument page", () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const homeLink = screen.getByRole("link", { name: /home/i });
      const addMonumentLink = screen.getByRole("link", {
        name: /add monument/i,
      });

      expect(homeLink).toBeVisible();
      expect(addMonumentLink).toBeVisible();
    });
  });
});
