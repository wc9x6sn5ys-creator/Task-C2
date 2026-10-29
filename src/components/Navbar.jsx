
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          DEV@DEAKIN
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/post">Post</Link>
        <a href="/#about">About</a>
        <a href="/#articles">Articles</a>
        <a href="/#tutorials">Tutorials</a>
        <a href="/#gallery">Gallery</a>
        <a href="/#contact">Contact</a>
      </div>

      <div className="navbar-actions">
        <a href="/#newsletter" className="subscribe-link">
          Subscribe
        </a>

        <button
          type="button"
          className="navbar-auth-button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          type="button"
          className="navbar-auth-button"
          onClick={() => navigate("/register")}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
