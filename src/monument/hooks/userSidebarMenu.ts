import { useState } from "react";
import { UseSidebarMenu } from "./types";

const useSidebarMenu = (): UseSidebarMenu => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSetShowSidebar = (): void => {
    setShowSidebar((showSidebar) => !showSidebar);
  };

  return {
    showSidebar,
    handleSetShowSidebar,
  };
};

export default useSidebarMenu;
