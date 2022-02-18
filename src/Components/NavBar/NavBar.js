import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, Routes, Navigate } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#" to="/">
          Home
        </Link>

        <Link className="navbar-brand" href="#" to="/MeetTheBelchers">
          Meet the Belchers
        </Link>
        <Link className="navbar-brand" href="#" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
