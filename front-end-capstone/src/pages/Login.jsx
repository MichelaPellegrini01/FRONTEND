import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Auth.css";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const { setUser, setToken } = useContext(AuthContext);

async function handleSubmit(e) {
  e.preventDefault();

  if (!email || !password) {
    alert("Compila tutti i campi");
    return;
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

 if (response.ok) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));

  setToken(data.token);
  setUser(data.user);

  alert("Login effettuato!");

  navigate("/");
} else {
  alert(data.message);
}
  } catch (error) {
    console.log(error);
    alert("Errore del server");
  };
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
        Accedi
      </h2>

      <p className="auth-subtitle">
        Bentornato su Happy Tail
      </p>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="auth-btn">
          Accedi
        </button>

        <p className="auth-text">
          Non hai un account? <Link to="/register">Registrati</Link>
        </p>

      </form>

    </div>
  </div>
);
}

export default Login;