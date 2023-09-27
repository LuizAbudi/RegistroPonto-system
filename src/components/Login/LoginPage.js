import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { authenticateUser } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import imagem from "./img/Logo-preto.png";

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
    <Container component="main" maxWidth="xs">
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "20%",
        }}
      >
        <img src={imagem} alt="Logo" style={{ width: "80%", height: "80%" }} />
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          label="Usuário"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Senha"
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "#4b2514",
            color: "#f2e1c9",
            padding: "10px 20px",
            marginTop: "20px",
            fontSize: "1rem",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#f5f5dc",
              color: "#4b2514",
            },
          }}
        >
          Entrar
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
