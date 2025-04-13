import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    const handleSetShowSidebar = vitest.fn();

    test("Then it should show 'MONUMENTS.' inside a level 1 heading", () => {
      render(<Header handleSetShowSidebar={handleSetShowSidebar} />, {
        wrapper: MemoryRouter,
      });

      const pageTitle = screen.getByRole("heading", {
        name: /monuments./i,
        level: 1,
      });

      expect(pageTitle).toBeVisible();
    });

    test("Then it should show a webside logo", () => {
      render(<Header handleSetShowSidebar={handleSetShowSidebar} />, {
        wrapper: MemoryRouter,
      });

      const pageLogo = screen.getByAltText("Website logo");

      expect(pageLogo).toBeVisible();
    });
  });
});
