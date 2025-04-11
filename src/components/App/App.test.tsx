import App from "./App";
import Header from "../Header/Header";
import { MemoryRouter } from "react-router";
import { screen, render } from "@testing-library/react";

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
          <Header />
        </MemoryRouter>,
      );

      const pageLogo = screen.getByAltText("Website logo");

      expect(pageLogo).toBeVisible();
    });
  });
});
