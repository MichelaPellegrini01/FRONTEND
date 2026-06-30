import "./CategoryBadge.css";

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
    <button className="categoryBadge compagnia">
      Cani da compagnia
    </button>

    <button className="categoryBadge lavoro">
      Cani da lavoro
    </button>

    <button className="categoryBadge retriever">
      Retriever
    </button>

    <button className="categoryBadge pastori">
      Pastori
    </button>

    <button className="categoryBadge terrier">
      Terrier
    </button>

    <button className="categoryBadge molossoidi">
      Molossoidi
    </button>

    <button className="categoryBadge levrieri">
      Levrieri
    </button>

    <button className="categoryBadge spitz">
      Spitz
    </button>
  </div>
</section>
  );
}

export default CategoryBadge;