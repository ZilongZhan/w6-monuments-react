import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given the Footer component", () => {
  describe("When it renders", () => {
    test("Then it should show the website footer", () => {
      render(<Footer />);

      const mainFooter = screen.getByRole("contentinfo", {
        name: /website footer/i,
      });

      expect(mainFooter).toBeVisible();
    });
  });
});
