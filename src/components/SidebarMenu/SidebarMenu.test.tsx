import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import SidebarMenu from "./SidebarMenu";

describe("Given the SidebarMenu component", () => {
  describe("When it receives showSidebar and handleSetShowSidebar", () => {
    const showSidebar = true;
    const handleSetShowSidebar = vitest.fn();

    test("Then it should show a 'Home' link", () => {
      render(
        <SidebarMenu
          showSidebar={showSidebar}
          handleSetShowSidebar={handleSetShowSidebar}
        />,
        { wrapper: MemoryRouter },
      );

      const homeLink = screen.getByRole("link", { name: /home/i });

      expect(homeLink).toBeVisible();
    });

    test("Then it should show a 'Close sidebar' button", () => {
      render(
        <SidebarMenu
          showSidebar={showSidebar}
          handleSetShowSidebar={handleSetShowSidebar}
        />,
        { wrapper: MemoryRouter },
      );

      const closeSidebarButton = screen.getByRole("button", {
        name: /close sidebar/i,
      });

      expect(closeSidebarButton).toBeVisible();
    });
  });
});
