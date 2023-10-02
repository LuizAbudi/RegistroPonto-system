import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { downloadCsv } from "../../utils/PdfCsvDownloader";
import "./Tabelas.css";

function TabelaPagamentoFuncionario() {
  function CriaCSV() {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    for (var i = 0; i < rows.length; i++) {
      var cols = rows[i].querySelectorAll("td, th");
      var row = [];
      for (var j = 0; j < cols.length; j++) {
        row.push(cols[j].innerText);
      }
      csv.push(row.join(";"));
    }
    csv = csv.join("\n");
    downloadCsv({ filename: "relatorio.csv", content: csv });
  }

  function getDadosPorFuncionario() {
    const registros = JSON.parse(localStorage.getItem("Funcionário") || "[]");
    const dadosPorFuncionario = {};

    registros.forEach((registro) => {
      const { funcionario, data, entrada, saida } = registro;
      if (!dadosPorFuncionario[funcionario]) {
        dadosPorFuncionario[funcionario] = [];
      }
      dadosPorFuncionario[funcionario].push({ data, entrada, saida });
    });

    return dadosPorFuncionario;
  }

  const RegistrosComValor = CalcularValor();
  const [nomeFuncionario, setNomeFuncionario] = useState("");
  const [showConfirmButton, setShowConfirmButton] = useState(false);

  const onConfirmClick = () => {
    CriaCSV();
    setShowConfirmButton(false);
  };

  const TemCerteza = () => {
    if (nomeFuncionario === "") {
      alert("Selecione um funcionário");
    } else {
      setShowConfirmButton(true);
    }
  };

  function CalcularValor() {
    const dadosPorFuncionario = getDadosPorFuncionario();

    Object.keys(dadosPorFuncionario).forEach((funcionario) => {
      const registros = dadosPorFuncionario[funcionario];
      registros.forEach((registro) => {
        const { data, entrada, saida } = registro;
        const [entradaHora, entradaMinuto] = entrada.split(":");
        const [saidaHora, saidaMinuto] = saida.split(":");
        const entradaEmMinutos =
          parseInt(entradaHora) * 60 + parseInt(entradaMinuto);
        const saidaEmMinutos = parseInt(saidaHora) * 60 + parseInt(saidaMinuto);
        const diferencaEmMinutos = saidaEmMinutos - entradaEmMinutos;
        const diferencaEmHoras = diferencaEmMinutos / 60;
        const valor = diferencaEmHoras * 10;
        registro.valor = valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      });
    });

    return dadosPorFuncionario;
  }

  return (
    <div className="pagamento-page">
      <FormControl variant="filled" sx={{ width: "100%", marginBottom: 2 }}>
        <InputLabel htmlFor="funcionario-select">Funcionário</InputLabel>
        <Select
          id="funcionario-select"
          value={nomeFuncionario}
          onChange={(e) => {
            setNomeFuncionario(e.target.value);
          }}
        >
          <MenuItem value="Todos">Todos</MenuItem>
          {Object.keys(RegistrosComValor).map((funcNome) => (
            <MenuItem key={funcNome} value={funcNome}>
              {funcNome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <table className="registros-table" id="tabela">
        <thead>
          <tr>
            <th>Funcionário</th>
            <th>Dia</th>
            <th>Entrada</th>
            <th>Saída</th>
            <th>Valor a ser pago</th>
          </tr>
        </thead>
        <tbody>
          {nomeFuncionario === "Todos"
            ? Object.entries(RegistrosComValor).flatMap(
                ([funcNome, registros]) =>
                  registros.map((registro, index) => (
                    <tr key={`${funcNome}-${index}`}>
                      <td>{funcNome}</td>
                      <td>{registro.data}</td>
                      <td>{registro.entrada}</td>
                      <td>{registro.saida}</td>
                      <td>{registro.valor}</td>
                    </tr>
                  ))
              )
            : RegistrosComValor[nomeFuncionario]?.map((registro, index) => (
                <tr key={index}>
                  <td>{nomeFuncionario}</td>
                  <td>{registro.data}</td>
                  <td>{registro.entrada}</td>
                  <td>{registro.saida}</td>
                  <td>{registro.valor}</td>
                </tr>
              ))}
        </tbody>
      </table>

      {showConfirmButton ? (
        <Button
          fullWidth
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "#cc7722",
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
          onClick={onConfirmClick}
        >
          Clique para confirmar
        </Button>
      ) : (
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
              backgroundColor: "#cc7722",
              color: "#4b2514",
            },
          }}
          onClick={TemCerteza}
        >
          Baixar CSV
        </Button>
      )}
    </div>
  );
}

export default TabelaPagamentoFuncionario;
