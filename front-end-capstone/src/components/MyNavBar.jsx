import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../assets/logo/logo.png";
import "./MyNavbar.css";

function MyNavbar() {
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
    <Nav.Link as={Link} to="/login">
  Accedi
</Nav.Link>

<Nav.Link as={Link} to="/register">
  Registrati
</Nav.Link>
  </Nav>
  <SearchBar />

</Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;