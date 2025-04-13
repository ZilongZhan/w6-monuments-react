import { NavLink } from "react-router";
import { useEffect } from "react";
import Button from "../../monument/components/shared/Button/Button";

import "./SidebarMenu.css";

interface SidebarMenuProp {
  showSidebar: boolean;
  handleSetShowSidebar: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProp> = ({
  showSidebar,
  handleSetShowSidebar,
}) => {
  useEffect(() => {
    const handleOnKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showSidebar) {
        handleSetShowSidebar();
      }
    };

    window.addEventListener("keydown", handleOnKeydown);

    return () => {
      window.removeEventListener("keydown", handleOnKeydown);
    };
  }, [showSidebar, handleSetShowSidebar]);

  return (
    <>
      {showSidebar && (
        <div className="backdrop">
          <nav className="sidebar-menu">
            <Button
              modifier="close"
              action={handleSetShowSidebar}
              aria-label="Close sidebar"
            >
              ✖
            </Button>
            <ul className="navigation-list navigation-list--vertical">
              <li>
                <NavLink className="navigation-list__item" to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="navigation-list__item" to="/add-monument">
                  Add monument
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default SidebarMenu;
