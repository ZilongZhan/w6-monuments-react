import { NavLink } from "react-router";

import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li>
          <NavLink className="navigation-list__item" to="/home">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
