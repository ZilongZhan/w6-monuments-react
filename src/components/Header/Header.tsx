import Navigation from "../Navigation/Navigation";

import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="title-container">
        <img src="monument.svg" alt="Website logo" className="app-logo" />
        <h1 className="app-title app-title--long">monuments.</h1>
        <h1 className="app-title app-title--short">mnmnts.</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
