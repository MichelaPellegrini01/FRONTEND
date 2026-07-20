import { Link } from "react-router-dom";
import "./MixedBreedPrev.css";
import { FaHeart } from "react-icons/fa";
import previewImage from "../assets/mixedbreed/meticcihome.jpg"

function MixedBreedPrev() {
  return (
    <section className="mixedBreedPrev">

      <div className="mixedBreedPrevText">

        <h2>
            <FaHeart className="me-2 text-danger" />Ogni cane merita amore</h2>

        <p>
          Dietro ogni meticcio si nasconde una storia fatta di speranza,
          affetto e voglia di ricominciare. Scopri perché adottare un
          meticcio significa accogliere un compagno unico e speciale.
        </p>

        <Link to="/mixed-breed" className="mixedBreedButton">
          Scopri i meticci
        </Link>

      </div>

      <div className="mixedBreedPrevImage">

         <img
    src={previewImage}
    alt="Cane meticcio"
  />

      </div>

    </section>
  );
}

export default MixedBreedPrev;