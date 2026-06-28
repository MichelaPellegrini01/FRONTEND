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

        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}

export default MyNavbar;