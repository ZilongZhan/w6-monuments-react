import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="title-container">
        <img src="monument.svg" alt="Website logo" className="page-logo" />
        <h1 className="page-title">monuments.</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
