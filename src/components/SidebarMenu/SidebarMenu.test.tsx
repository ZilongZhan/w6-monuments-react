import { render, renderHook, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { act } from "react";
import useSidebarMenu from "../../monument/hooks/userSidebarMenu";
import SidebarMenu from "./SidebarMenu";

describe("Given the SidebarMenu component", () => {
  describe("When it receives showSidebar and handleSetShowSidebar", () => {
    const { result } = renderHook(() => useSidebarMenu());

    act(() => result.current.handleSetShowSidebar());

    test("Then it should show a 'Home' link", () => {
      render(
        <SidebarMenu
          showSidebar={result.current.showSidebar}
          handleSetShowSidebar={result.current.handleSetShowSidebar}
        />,
        { wrapper: MemoryRouter },
      );

      const homeLink = screen.getByRole("link", { name: /home/i });

      expect(homeLink).toBeVisible();
    });

    test("Then it should show a 'Close sidebar' button", () => {
      render(
        <SidebarMenu
          showSidebar={result.current.showSidebar}
          handleSetShowSidebar={result.current.handleSetShowSidebar}
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
