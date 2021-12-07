import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Logo</h1>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home </NavLink>
            </li>
            <li>
              <NavLink to="/about">About </NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts </NavLink>
            </li>
            <li>
              <NavLink to="/boxes">Boxes </NavLink>
            </li>
            <li>
              <NavLink to="/form">Form </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
