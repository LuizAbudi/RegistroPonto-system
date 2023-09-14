import React, { useState, useContext } from "react";
import "../global/globalStyles.css";
import "./RegistroPage.css";
import DataContext from "../../utils/DataContext";

function RegistroPage() {
  const [pontosExibidos, setPontosExibidos] = useState([]); // Estado inicial é um array vazio
  const { setRegistros } = useContext(DataContext);

  const showPonto = () => {
    let contador = localStorage.getItem("contador");
    let tamPilha = parseInt(contador);
    let pontos = [];

    for (let i = 1; i <= tamPilha; i++) {
      let ponto = localStorage.getItem(i.toString());
      pontos.push(JSON.parse(ponto));
    }

    setPontosExibidos(pontos);

    setRegistros(pontos);
  };

  return (
    <div>
      <h2>Registro de Dados</h2>
      <button className="btn" onClick={showPonto}>
        Ver Pontos
      </button>
      <section>
        {pontosExibidos.map((ponto, index) => (
          <div key={index}>
            <p>
              Data: {ponto.data} - Hora: {ponto.hora}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default RegistroPage;
