import { Link } from "react-router-dom";
import "./DogCard.css";

function DogCard({ title, image, category, to }) {
  
  return (
    <div className="dogCard">
      <img
        src={image}
        alt={title}
        className="dogCardImage"
      />

      <div className="dogCardBody">
        <h3>{title}</h3>
        <p>{category}</p>

        <Link to={to} className="dogCardButton">
          Scopri di più
        </Link>
      </div>
    </div>
  );
}

export default DogCard;