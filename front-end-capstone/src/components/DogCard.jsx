import { Link } from "react-router-dom";
import "./DogCard.css";

function DogCard({ title, image }) {
  return (
    <div className="dogCard">
      <img
        src={image}
        alt={title}
        className="dogCardImage"
      />

      <div className="dogCardBody">
        <h3>{title}</h3>

        <Link to="/dogs" className="dogCardButton">
          Scopri di più
        </Link>
      </div>
    </div>
  );
}

export default DogCard;