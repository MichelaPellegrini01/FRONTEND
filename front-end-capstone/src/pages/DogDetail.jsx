import "./DogDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import dogs from "../data/dogs";

function DogDetail() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/dogs/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setDog(data);
    })
    .catch((error) => {
      console.error("Errore nel recupero del cane:", error);
    });
}, [id]);
  
  if (!dog) {
    return <h2>Caricamento...</h2>;
  }
  return (
    <section className="dogDetail">

      <h1>{dog.name}</h1>

      <p className="dogCategory">{dog.category}</p>

      <img
        src={`/dogs/${dog.image}`}
        alt={dog.name}
        className="dogImage"
      />

      <div className="dogInfo">

        <h2>Descrizione</h2>
        <p>{dog.description}</p>

        <div className="dogStats">

          <div>
            <h3>Peso</h3>
            <p>{dog.weight}</p>
          </div>

          <div>
            <h3>Altezza</h3>
            <p>{dog.height}</p>
          </div>

          <div>
            <h3>Aspettativa di vita</h3>
            <p>{dog.lifeExpectancy}</p>
          </div>

          <div>
            <h3>Temperamento</h3>
            <p>{dog.temperament.join(" • ")}</p>
          </div>

        </div>
        <div className="detailCard"><h2>Alimentazione</h2>
          <p>{dog.feeding}</p>
        </div>

        <div className="detailCard">
          <h2>Cura</h2>
          <p>{dog.care}</p>
        </div>

        <div className="detailCard"> 
          <h2>Origini</h2>
          <p>{dog.origin}</p>
        </div>

      </div>

    </section>
  );
}

export default DogDetail;