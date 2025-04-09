import { Outlet } from "react-router";
import Header from "../Header/Header";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
