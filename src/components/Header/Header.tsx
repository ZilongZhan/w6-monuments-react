import Button from "../../monument/components/shared/Button/Button";
import Navigation from "../Navigation/Navigation";

import "./Header.css";

interface HeaderProps {
  handleSetShowSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleSetShowSidebar }) => {
  return (
    <header className="main-header">
      <div className="title-container">
        <img
          src="monument.svg"
          alt="Website logo"
          className="app-logo"
          width="25"
          height="25"
        />
        <h1 className="app-title app-title--long">monuments.</h1>
        <h1 className="app-title app-title--short">mnmnts.</h1>
      </div>
      <Button modifier="menu" action={handleSetShowSidebar}>
        &#9776;
      </Button>
      <Navigation />
    </header>
  );
};

export default Header;
