import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Compila tutti i campi");
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {

  alert("Registrazione completata!");

  navigate("/login");

} else {

  alert(data.message);

}
    } catch (error) {
      console.log(error);
      alert("Errore del server");
    }
  }

  return (

    <div className="auth-page">

      <div className="auth-card">

        <img
          src="/pawFavicon.png"
          alt="Happy Tail"
          className="auth-logo"
        />

        <h2 className="auth-title">
          Registrati
        </h2>

        <p className="auth-subtitle">
          Crea il tuo account Happy Tail
        </p>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />


          <input
            className="form-control mb-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className=" btn auth-btn">Registrati</button>
          <p className="auth-text">
            Hai già un account? <Link to="/login">Accedi</Link>
          </p>
        </form>
      </div>

    </div>

  );
}

export default Register;