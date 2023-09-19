import React, { useState } from "react";
import "./LoginPage.css";
import imagem from "./img/Logo-preto.png";
import { authenticateUser } from "../../services/authServices";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = authenticateUser(username, password);

    if (result != null) {
      alert(`Usuário ${result.username} logado!`);
      localStorage.setItem("token", result.token);
      localStorage.setItem("type", result.tipo);
      navigate("/home");
    } else {
      alert(`Usuário não cadastrado!`);
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={imagem} alt="Logo" className="logo-image" />
      </div>
      <form
      //  onChange={handleSubmit}
      >
        <div className="login-box">
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password" // Atualizado o tipo de input para "password".
            className="form-control"
            placeholder="Digite sua Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="button" onClick={handleSubmit}>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
