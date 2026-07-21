import "./DogDetail.css";
import { Form, Button, } from "react-bootstrap";
import { useEffect, useState, useContext  } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaStar } from "react-icons/fa";
//import dogs from "../data/dogs";

function DogDetail() {
  const { id } = useParams();
  const { user, token } = useContext(AuthContext);
  console.log("USER:", user);
  const [dog, setDog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
  rating: 5,
  text: "",
});
  useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/dogs/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setDog(data);
    })
    .catch((error) => {
      console.error("Errore nel recupero del cane:", error);
    });

fetch(`${import.meta.env.VITE_API_URL}/comments/${id}`)
  .then((res) => res.json())
  .then((data) => {
    setComments(data);
  })
  .catch((error) => {
    console.error("Errore recupero commenti:", error);
  });
  

}, [id]);

  if (!dog) {
    return <h2>Caricamento...</h2>;
  }
  const handleSubmitComment = async () => {
  if (!newComment.text.trim()) {
    alert("Scrivi un commento");
    return;
  }

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          rating: newComment.rating,
          text: newComment.text,
          dog: id,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Errore durante il salvataggio del commento");
    }

    const savedComment = await response.json();
    setComments([...comments, savedComment]);
    setNewComment({
      rating: 5,
      text: "",
    });

  } catch (error) {
    console.error(error);
  }
};
  return (
    <section className="dogDetail">

      <h1>{dog.name}</h1>

      <p className="dogCategory">{dog.category}</p>

     <img
  src={dog.image.startsWith("http") ? dog.image : `/dogs/${dog.image}`}
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

      <div className="commentsSection">
  <h2>Commenti</h2>

  {comments.length === 0 ? (
    <p>Nessun commento disponibile.</p>
  ) : (
    comments.map((comment) => (
      <div key={comment._id} className="commentCard">
        <h4>{comment.name}</h4>
        <p>  <FaStar className="text-warning me-1" />{comment.rating}/5</p>
        <p>{comment.text}</p>
      </div>
    ))
  )}
  <hr />

{user ? (
  <div className="commentForm">
    <h3>Scrivi un commento</h3>

  <label className="mb-2 d-block">
  <FaStar className="text-warning me-2" />
  Valutazione
</label>

<div className="d-flex align-items-center gap-2 mb-3">
  <Form.Select
    value={newComment.rating}
    onChange={(e) =>
      setNewComment({
        ...newComment,
        rating: Number(e.target.value),
      })
    }
  >
  

    <option value={5}>5</option>
    <option value={4}>4</option>
    <option value={3}>3</option>
    <option value={2}>2</option>
    <option value={1}>1</option>
  </Form.Select>

  <span>/5</span>
</div>
  <Form.Group className="mb-3">
  <Form.Label>Commento</Form.Label>

  <Form.Control
    as="textarea"
    rows={4}
    placeholder="Scrivi un commento..."
    value={newComment.text}
    onChange={(e) =>
      setNewComment({
        ...newComment,
        text: e.target.value,
      })
    }
  />
</Form.Group>

<Button
  className="admin-btn"
  onClick={handleSubmitComment}
>
  Pubblica recensione
</Button>
  </div>
) : (
  <div className="commentLogin">
    <p>
      Vuoi lasciare un commento? Fai il login!
    </p>
  </div>
)}
</div>

    </section>
  );
}



export default DogDetail;