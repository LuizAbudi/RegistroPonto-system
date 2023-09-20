import React, { useState, useContext } from "react";
import "../global/globalStyles.css";
import "./RegistroPage.css";
import DataContext from "../../utils/DataContext";

function RegistroPage() {
  const [pontosExibidos, setPontosExibidos] = useState([]);
  const { setRegistros } = useContext(DataContext);
  const [indiceEdicao, setIndiceEdicao] = useState(null);

  const showPonto = () => {
    let datas = Object.keys(localStorage)
      .filter((key) => key.includes("/"))
      .sort((a, b) => {
        // Convertendo a data de "DD/MM/YYYY" para "YYYY-MM-DD"
        const convertDate = (dateStr) => {
          const [day, month, year] = dateStr.split("/");
          return `${year}-${month}-${day}`;
        };
        return Date.parse(convertDate(a)) - Date.parse(convertDate(b));
      }); // Obter chaves de data
    let pontos = [];

    if (datas.length === 0) {
      alert("Não há pontos registrados");
      return;
    }

    datas.forEach((data) => {
      let registrosDoDia = JSON.parse(localStorage.getItem(data));
      pontos.push({ data, registros: registrosDoDia });
    });

    setPontosExibidos(pontos);
    setRegistros(pontos);
  };

  const handleTimeChange = (index, registroIndex, event) => {
    const updatedPoints = [...pontosExibidos];
    updatedPoints[index].registros[registroIndex].hora = event.target.value;
    setPontosExibidos(updatedPoints);
  };

  const confirmChange = (index, registroIndex) => {
    // 1. Pegue a hora original antes de ser editada
    const horaOriginal = pontosExibidos[index].registros[registroIndex].hora;

    // 2. Salve a nova hora
    localStorage.setItem(
      pontosExibidos[index].data,
      JSON.stringify(pontosExibidos[index].registros)
    );

    // 3. Crie uma notificação com a hora original e a nova hora
    const notifications = JSON.parse(
      localStorage.getItem("adminNotifications") || "[]"
    );
    notifications.push({
      date: pontosExibidos[index].data,
      originalHora: horaOriginal,
      newHora: pontosExibidos[index].registros[registroIndex].hora,
    });

    localStorage.setItem("adminNotifications", JSON.stringify(notifications));

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
              <th>Data</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {pontosExibidos.map((ponto, index) => (
              <tr key={index}>
                <td>{ponto.data}</td>
                {ponto.registros.map((registro, registroIndex) => (
                  <React.Fragment key={registroIndex}>
                    <td>
                      {indiceEdicao === `${index}-${registroIndex}` ? (
                        <>
                          <input
                            type="time"
                            value={registro.hora}
                            onChange={(event) =>
                              handleTimeChange(index, registroIndex, event)
                            }
                          />
                          <button
                            onClick={() => confirmChange(index, registroIndex)}
                          >
                            Confirmar
                          </button>
                        </>
                      ) : (
                        registro.hora
                      )}
                    </td>
                  </React.Fragment>
                ))}
                <td>
                  <button onClick={() => setIndiceEdicao(`${index}-0`)}>
                    Editar Entrada
                  </button>
                  {ponto.registros[1] && (
                    <button onClick={() => setIndiceEdicao(`${index}-1`)}>
                      Editar Saída
                    </button>
                  )}
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
