import "./Intro.css";
import logo from "../assets/logo/logo.png";
import { FaPaw } from "react-icons/fa";

function Intro() {
  return (
    <div className="intro">

      <div className="introContent">

        <img
          src={logo}
          alt="Happy Tail"
          className="introLogo"
        />

        <h1>Happy Tail</h1>

        <p>
          La guida perfetta per conoscere i cani
        </p>

        <div className="pawContainer">
          <FaPaw className="paw paw1" />
          <FaPaw className="paw paw2" />
          <FaPaw className="paw paw3" />
          <FaPaw className="paw paw4" />
        </div>

      </div>

    </div>
  );
}

export default Intro;