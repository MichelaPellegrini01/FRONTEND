import "./CategoryBadge.css";
import { Link } from "react-router-dom";

function CategoryBadge() {
  const categories = [
    "Cani da compagnia",
    "Cani da lavoro",
    "Retriever",
    "Pastori",
    "Terrier",
    "Molossoidi",
    "Levrieri",
    "Spitz",
  ];

  return (
    <section className="categorySection">
  <h2>Esplora per categoria</h2>

  <div className="badgeContainer">
    <Link
  to="/dogs?category=Cani da compagnia"
  className="categoryBadge compagnia">
  Cani da compagnia
</Link>

   <Link
  to="/dogs?category=Cani da lavoro"
  className="categoryBadge lavoro">
  Cani da lavoro
</Link>

   <Link
  to="/dogs?category=Retriever"
  className="categoryBadge retriever">
  Retriever
</Link>

   <Link
  to="/dogs?category=Pastori"
  className="categoryBadge pastori">
  Pastori
</Link>

   <Link
  to="/dogs?category=Terrier"
  className="categoryBadge terrier">
  Terrier
</Link>

    <Link
  to="/dogs?category=Molossoidi"
  className="categoryBadge molossoidi">
  Molossoidi
</Link>

   <Link
  to="/dogs?category=Levrieri"
  className="categoryBadge levrieri">
  Levrieri
</Link>

   <Link
  to="/dogs?category=Spitz"
  className="categoryBadge spitz">
  Spitz
</Link>
  </div>
</section>
  );
}

export default CategoryBadge;