import React, { useState } from "react";
import "./LoginPage.css";
import imagem from "./img/Logo-preto.png";
import { authenticateUser } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      <form>
        <div className="login-box">
          <div>
            <input
              type="text"
              className="form-control"
              placeholder=" Digite seu Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder=" Digite sua Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="toggle-password-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>

          <button type="submit" className="button" onClick={handleSubmit}>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
