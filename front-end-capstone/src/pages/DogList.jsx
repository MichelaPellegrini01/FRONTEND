import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CategoryBadge from "../components/CategoryBadge";
import DogCard from "../components/DogCard";
//import dogs from "../data/dogs";
import "./DogList.css";

function DogList() {
  const [search, setSearch] = useState("");
  const [dogs, setDogs] = useState([]);
  const [searchParams] = useSearchParams();
const category = searchParams.get("category");
  useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/dogs`)
    .then((res) => res.json())
    .then((data) => {
      setDogs(data);
    })
    .catch((error) => {
      console.error("Errore nel recupero dei cani:", error);
    });
}, []);
const filteredDogs = dogs.filter((dog) => {
  const searchOk =
    dog.name.toLowerCase().includes(search.toLowerCase()) ||
    dog.category.toLowerCase().includes(search.toLowerCase());

  const categoryOk =
    !category || dog.category === category;

  return searchOk && categoryOk;
});
  return (
    <section className="dogList">

      <h1>Razze Pure</h1>

      <p>
        Scopri tutte le razze presenti su Happy Tail.
      </p>

     <SearchBar className="largeSearchBar"
     value={search}
  onChange={(e) => setSearch(e.target.value)} />

     <CategoryBadge />

      <div className="dogsContainer">

       {filteredDogs.map((dog) => {
  console.log("DogList:", dog);

  return (
    <DogCard
     key={dog._id}
      title={dog.name}
      category={dog.category}
      image={dog.image}
       to={`/dogs/${dog._id}`}
    />
  );
})}

      </div>

    </section>
  );
}

export default DogList;