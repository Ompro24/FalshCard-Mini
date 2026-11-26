import { NavLink } from "react-router-dom";
import "./Navbar.css";

// Navigation bar with links to the three pages of the app.
// NavLink highlights the page the user is currently on.
function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-title">
        Dev-Term Flashcards
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/" end className="navbar-link">
          Home
        </NavLink>
        <NavLink to="/flashcards" className="navbar-link">
          Flashcards
        </NavLink>
        <NavLink to="/about" className="navbar-link">
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
