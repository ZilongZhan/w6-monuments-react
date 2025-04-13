import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useSidebarMenu from "../../monument/hooks/userSidebarMenu";
import SidebarMenu from "../SidebarMenu/SidebarMenu";

import "./App.css";

const App: React.FC = () => {
  const { showSidebar, handleSetShowSidebar } = useSidebarMenu();

  return (
    <div className="container">
      <Header handleSetShowSidebar={handleSetShowSidebar} />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
      <SidebarMenu
        showSidebar={showSidebar}
        handleSetShowSidebar={handleSetShowSidebar}
      />
    </div>
  );
};

export default App;
