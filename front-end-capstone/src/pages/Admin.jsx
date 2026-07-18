import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import "./Admin.css";

function Admin() {
    const { user } = useContext(AuthContext);
    const [showForm, setShowForm] = useState(false);
     const [formData, setFormData] = useState({
   name: "",
  category: "",
  image: "",
  temperament: "",
  description: "",
  weight: "",
  height: "",
  lifeExpectancy: "",
  feeding: "",
  care: "",
  origin: "",
  });
  const [dogs, setDogs] = useState([]);
  const [editingDog, setEditingDog] = useState(null);

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const dogData = {
    ...formData,
    temperament: formData.temperament
      .split(",")
      .map((t) => t.trim()),
  };

  try {
    const url = editingDog
  ? `${import.meta.env.VITE_API_URL}/dogs/${editingDog._id}`
  : `${import.meta.env.VITE_API_URL}/dogs`;

const method = editingDog ? "PUT" : "POST";

const response = await fetch(url, {
  method,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(dogData),
});

    if (!response.ok) {
      throw new Error("Errore durante il salvataggio");
    }

    const newDog = await response.json();
    const updatedDogs = await fetch(`${import.meta.env.VITE_API_URL}/dogs`);
const data = await updatedDogs.json();

setDogs(data);

setEditingDog(null);

setFormData({
  name: "",
  category: "",
  image: "",
  temperament: "",
  description: "",
  weight: "",
  height: "",
  lifeExpectancy: "",
  feeding: "",
  care: "",
  origin: "",
});

setShowForm(false);

    console.log("Razza salvata:", newDog);

  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/dogs`)
    .then((res) => res.json())
    .then((data) => setDogs(data))
    .catch((err) => console.error(err));
}, []);

console.log(dogs);

const handleEdit = (dog) => {
  setEditingDog(dog);

  setFormData({
    name: dog.name || "",
    category: dog.category || "",
    image: dog.image || "",
    temperament: dog.temperament?.join(", ") || "",
    description: dog.description || "",
    weight: dog.weight || "",
    height: dog.height || "",
    lifeExpectancy: dog.lifeExpectancy || "",
    feeding: dog.feeding || "",
    care: dog.care || "",
    origin: dog.origin || "",
  });

  setShowForm(true);
};

    return (
        <Container className="admin-page">

            <Card className="admin-card">

                <Card.Body>

                    <h1 className="admin-title">
                        <MdAdminPanelSettings className="admin-icon" />
                        Pannello Admin
                    </h1>

                    <p className="admin-subtitle">
                        Benvenuto <strong>{user?.name}</strong>
                    </p>

                    <p className="admin-description">
                        Da questa pagina puoi gestire tutte le razze presenti su Happy Tail.
                    </p>

                    <Button
                        className="admin-btn"
                        onClick={() => setShowForm(!showForm)}>
                        <FaPlus className="me-2" />
                        Aggiungi Razza
                    </Button>

                    {showForm && (
                        <div className="form-container">

                            <h4>Aggiungi una nuova razza!</h4>

                            <hr />

                          <Form onSubmit={handleSubmit}>
                            <Row>
  <Col md={6}>
    <Form.Group className="mb-3">
      <Form.Label>Nome Razza</Form.Label>

      <Form.Control
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Es. Labrador"
      />
    </Form.Group>
  </Col>

  <Col md={6}>
    <Form.Group className="mb-3">
      <Form.Label>Gruppo</Form.Label>

      <Form.Select
        name="category"
        value={formData.category}
        onChange={handleChange} >
        <option value="">Seleziona il gruppo</option>
        <option value="Compagnia">Cani da compagnia</option>
        <option value="Lavoro">Cani da lavoro</option>
        <option value="Levriero">Levrieri</option>
        <option value="Molossoide">Molossoidi</option>
        <option value="Retriever">Retriever</option>
        <option value="Pastore">Pastori</option>
        <option value="Terrier">Terrier</option>
        <option value="Spitz">Spitz</option>
      </Form.Select>
    </Form.Group>
  </Col>
</Row>
<Row>
  <Col md={6}>
    <Form.Group className="mb-3">
      <Form.Label>Peso</Form.Label>

      <Form.Control
        type="text"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        placeholder="Es. 25-36 kg"
      />
    </Form.Group>
  </Col>

  <Col md={6}>
    <Form.Group className="mb-3">
      <Form.Label>Altezza</Form.Label>

      <Form.Control
        type="text"
        name="height"
        value={formData.height}
        onChange={handleChange}
        placeholder="Es. 55-62 cm"
      />
    </Form.Group>
  </Col>
</Row>
<Row>
  <Col md={6}>
    <Form.Group className="mb-3">
      <Form.Label>Aspettativa di vita</Form.Label>

      <Form.Control
        type="text"
        name="lifeExpectancy"
        value={formData.lifeExpectancy}
        onChange={handleChange}
        placeholder="Es. 10-12 anni"
      />
    </Form.Group>
  </Col>

  <Col md={6}>
    <Form.Group className="mb-3">
      <Form.Label>Temperamento</Form.Label>

      <Form.Control
        type="text"
        name="temperament"
        value={formData.temperament}
        onChange={handleChange}
        placeholder="Es. Affettuoso, intelligente..."
      />
    </Form.Group>
  </Col>
</Row>
<Row>
  <Col md={6}>
    <Form.Group className="mb-3">
      <Form.Label>Alimentazione</Form.Label>

      <Form.Control
        as="textarea"
        rows={3}
        name="feeding"
        value={formData.feeding}
        onChange={handleChange}
      />
    </Form.Group>
  </Col>

  <Col md={6}>
    <Form.Group className="mb-3">
      <Form.Label>Cura</Form.Label>

      <Form.Control
        as="textarea"
        rows={3}
        name="care"
        value={formData.care}
        onChange={handleChange}
      />
    </Form.Group>
  </Col>
</Row>
<Form.Group className="mb-3">
  <Form.Label>Consigli</Form.Label>

  <Form.Control
    as="textarea"
    rows={4}
    name="description"
    value={formData.description}
    onChange={handleChange}
  />
</Form.Group>
<Form.Group className="mb-4">
  <Form.Label>URL Immagine</Form.Label>

  <Form.Control
    type="text"
    name="image"
    value={formData.image}
    onChange={handleChange}
    placeholder="https://..."
  />
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>Origini</Form.Label>

  <Form.Control
    as="textarea"
    rows={4}
    name="origin"
    value={formData.origin}
    onChange={handleChange}
    placeholder="Scrivi le origini della razza..."
  />
</Form.Group>
<div className="d-flex justify-content-end gap-2">

  <Button
    variant="secondary"
    onClick={() => setShowForm(false)}
  >
    Annulla
  </Button>

  <Button type="submit" className="admin-btn">
  {editingDog ? "Aggiorna Razza" : "Salva Razza"}
</Button>

</div>
                          </Form>

                       

                        </div>
                    )}

                       <hr />

<h4>Razze presenti</h4>

{dogs.map((dog) => (
  <Card key={dog._id} className="mb-3">
    <Card.Body className="d-flex justify-content-between align-items-center">
      <div>
        <h5>{dog.name}</h5>
        <p className="mb-0">{dog.category}</p>
      </div>

      <div className="d-flex gap-2">
       <Button
  variant="warning"
  onClick={() => handleEdit(dog)}>
  Modifica
</Button>

        <Button variant="danger">
          Elimina
        </Button>
      </div>
    </Card.Body>
  </Card>
))}

                </Card.Body>

            </Card>

        </Container>
    );

}

export default Admin;