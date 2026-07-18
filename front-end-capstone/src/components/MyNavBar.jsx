import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BsPersonCircle  } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import SearchBar from "./SearchBar";
import logo from "../assets/logo/logo.png";
import "./MyNavbar.css";

function MyNavbar() {
  const { user, logout } = useContext(AuthContext);
  
  
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
    <Nav.Link as={Link} to="/dogs">
      Razze Pure
    </Nav.Link>

    <Nav.Link as={Link} to="/mixed-breed">
      Meticci
    </Nav.Link>
  </Nav>
<Nav>
  {user ? (
    <>
      {user.isAdmin && (
        <Nav.Link
          as={Link}
          to="/admin"
          className="d-flex align-items-center"
        >
          <MdAdminPanelSettings className="me-2" />
          Gestione
        </Nav.Link>
      )}

      <Nav.Link className="d-flex align-items-center">
        <BsPersonCircle className="me-2" />
        {user.name}
      </Nav.Link>

      <Nav.Link onClick={logout}>
        Logout
      </Nav.Link>
    </>
  ) : (
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