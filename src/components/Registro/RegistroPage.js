import React, { useState, useContext } from "react";
import "../global/globalStyles.css";
import "./RegistroPage.css";
import DataContext from "../../utils/DataContext";

function RegistroPage() {
  const [pontosExibidos, setPontosExibidos] = useState([]);
  const { setRegistros } = useContext(DataContext);
  const [indiceEdicao, setIndiceEdicao] = useState(null);

  const showPonto = () => {
    let contador = localStorage.getItem("contador");
    let tamPilha = parseInt(contador);
    let pontos = [];

    if (contador === null) {
      alert("Não há pontos registrados");
      return;
    }

    for (let i = 1; i <= tamPilha; i++) {
      let ponto = localStorage.getItem(i.toString());
      pontos.push(JSON.parse(ponto));
    }

    setPontosExibidos(pontos);
    setRegistros(pontos);
  };

  const handleTimeChange = (index, event) => {
    const updatedPoints = [...pontosExibidos];
    updatedPoints[index].hora = event.target.value;
    setPontosExibidos(updatedPoints);

    // Salva a hora editada no localStorage
    localStorage.setItem(
      (index + 1).toString(),
      JSON.stringify(updatedPoints[index])
    );

    // Resetar o índice de edição para retornar à visualização de texto
    setIndiceEdicao(null);
  };

  return (
    <div className="registro-container">
      <header className="registro-header">
        <h1>Registro de Dados</h1>
      </header>
      <main className="registro-main">
        <button className="btn" onClick={showPonto}>
          Ver Pontos
        </button>
        <table className="registros-table">
          <thead>
            <tr>
              <th id="data">Data</th>
              <th>Hora</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {pontosExibidos.map((ponto, index) => (
              <tr key={index}>
                <td>{ponto.data}</td>
                <td id="hora">
                  {indiceEdicao === index ? (
                    <input
                      type="time"
                      value={ponto.hora}
                      onChange={(event) => handleTimeChange(index, event)}
                    />
                  ) : (
                    ponto.hora
                  )}
                </td>
                <td id="botao">
                  <button onClick={() => setIndiceEdicao(index)}>
                    Editar Hora
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer className="registro-footer">
        Bar e Bocha - Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default RegistroPage;
