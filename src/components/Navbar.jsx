import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark gradient-navbar py-3">
      <div className="container d-flex justify-content-between">
        <Link className="navbar-brand fw-bold" to="/">
          JSONPlaceholder Feed
        </Link>
        <div className="d-flex gap-4">
          <Link className="nav-link fw-semibold text-white" to="/">
            Home
          </Link>
          <Link className="nav-link fw-semibold text-white" to="/entities">
            Entities
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
