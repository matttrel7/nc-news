import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <header>
        <h1 className="App-header">NC News</h1>
      </header>
    </Link>
  );
};

export default Header;
