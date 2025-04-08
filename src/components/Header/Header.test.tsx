import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'MONUMENTS.' inside a level 1 heading", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const pageTitle = screen.queryByRole("heading", {
        name: /monuments./i,
        level: 1,
      });

      expect(pageTitle).toBeVisible();
    });

    test("Then it should show a webside logo", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const pageLogo = screen.queryByAltText("Website logo");

      expect(pageLogo).toBeVisible();
    });
  });
});
