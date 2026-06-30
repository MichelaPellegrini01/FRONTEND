import "./Footer.css";
import logo from "../assets/logo/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">

        <img
          src={logo}
          alt="Happy Tail"
          className="footerLogo"
        />

        <p className="footerDescription">
          La guida perfetta per conoscere i cani.
        </p>

        <div className="footerLinks">

          <a
            href="https://github.com/MichelaPellegrini01?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/michela-pellegrini-webdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

      <div className="footerBottom">
        © 2026 Happy Tail • Realizzato da Michela Pellegrini
      </div>
    </footer>
  );
}

export default Footer;