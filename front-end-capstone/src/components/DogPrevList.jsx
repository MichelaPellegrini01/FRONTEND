import DogCard from "./DogCard";

import retriever from "../assets/categories/retriever.jpg";
import pastori from "../assets/categories/pastori.jpg";
import compagnia from "../assets/categories/daCompagnia.jpg";
import terrier from "../assets/categories/terrier.jpg";

import "./DogPrevList.css";

function DogPrevList() {
  return (
    <section className="dogPrevList">
      <h2>Le categorie preferite dagli amanti dei cani di oggi</h2>

      <div className="dogPrevListContainer">
        <DogCard
          title="Retriever"
          image={retriever}
        />

        <DogCard
          title="Pastori"
          image={pastori}
        />

        <DogCard
          title="Cani da compagnia"
          image={compagnia}
        />

        <DogCard
          title="Terrier"
          image={terrier}
        />
      </div>
    </section>
  );
}

export default DogPrevList;