import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BsPersonCircle } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import SearchBar from "./SearchBar";
import logo from "../assets/logo/logo.png";
import "./MyNavBar.css";

function MyNavbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    logout();
  };
  return (
    <Navbar expand="lg" className="customNavbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Happy Tail"
            className="navbarLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="mainNavbar" />

        <Navbar.Collapse id="mainNavbar">
          <Nav className="me-auto">
            <Link to="/dogs" className="nav-link">
              Razze Pure
            </Link>

            <Link to="/mixed-breed" className="nav-link">
              Meticci
            </Link>
          </Nav>
          <Nav>
         {user && (
  <>
    {user.isAdmin && (
      <Nav.Link as={Link} to="/admin">
        Gestione
      </Nav.Link>
    )}

    <Nav.Link>
      {user.name}
    </Nav.Link>

   <Nav.Link onClick={handleLogout}>
  Logout
</Nav.Link>
  </>
)}

{!user && (
  <>
    <Nav.Link as={Link} to="/login">
      Accedi
    </Nav.Link>

    <Nav.Link as={Link} to="/register">
      Registrati
    </Nav.Link>
  </>
)}
          </Nav>
          <SearchBar />

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;