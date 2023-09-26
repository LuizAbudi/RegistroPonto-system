import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import "./AlterarValorPagamento.css";

const funcionario = [
  {
    nome: "João",
  },
  {
    nome: "Maria",
  },
  {
    nome: "José",
  },
  {
    nome: "Pedro",
  },
  {
    nome: "Ana",
  },
  {
    nome: "Paulo",
  },
];

function AlterarValorPagamento() {
  const [valorAtual, setValorAtual] = useState("10");
  const [novoValor, setNovoValor] = useState("");
  const [selectedFuncionario, setSelectedFuncionario] = useState("");

  const handleNewValueChange = (event) => {
    const value = event.target.value;
    setNovoValor(value.replace(/\D/g, ""));
  };

  const handleChange = () => {
    if (novoValor === "") {
      alert("Digite um valor válido");
      return;
    }
    setValorAtual(novoValor);
    setNovoValor("");
  };

  return (
    <div className="valor-pagamneto">
      <FormControl variant="filled" sx={{ width: "50%", marginBottom: 2 }}>
        <InputLabel htmlFor="funcionario-select">Funcionario</InputLabel>
        <Select
          id="funcionario-select"
          value={selectedFuncionario}
          onChange={(e) => setSelectedFuncionario(e.target.value)}
        >
          {funcionario.map((func) => (
            <MenuItem key={func.nome} value={func.nome}>
              {func.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        sx={{ width: "50%", marginBottom: 2 }}
        label="Valor atual"
        value={`R$${valorAtual}`}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />
      <TextField
        sx={{ width: "50%", marginBottom: 2 }}
        label="Novo valor"
        value={novoValor}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleNewValueChange}
        variant="filled"
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
        }}
      />
      <button className="button-mudar-valor" onClick={handleChange}>
        Alterar
      </button>
    </div>
  );
}

export default AlterarValorPagamento;
