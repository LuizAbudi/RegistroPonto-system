import React, { useState, useEffect, useContext } from "react";
import "../global/globalStyles.css";
import "./HomeStyles.css";
import DataContext from "../../utils/DataContext";
import { pegarDataHoraAtual } from "../../utils/LogPontoData";

function HomePage() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date] = useState(new Date().toLocaleDateString());

  const { registros, setRegistros } = useContext(DataContext);

  const registrarPonto = () => {
    const novoPonto = pegarDataHoraAtual();

    // Recuperar o contador atual do localStorage
    let currentCount = localStorage.getItem("contador") || 0;

    if (parseInt(currentCount) >= 8) {
      alert("Você já registrou 8 pontos. Não é possível registrar mais.");
      return;
    }
    // incrementa a te 8
    let newCount = parseInt(currentCount) + 1;

    // Atualize o contador no localStorage
    localStorage.setItem("contador", newCount.toString());

    // Use o contador como a chave para o novo ponto no localStorage
    localStorage.setItem(newCount.toString(), JSON.stringify(novoPonto));

    setRegistros((prev) => {
      return [...prev, novoPonto];
    });
  };

  //--------------
  //Usado para atualizar o relogio a todo tempo
  //--------------
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Controle de Ponto - Bar e Bocha</h1>
      </header>
      <main className="home-main">
        <section>
          <div className="clock">{time}</div>
          <div className="date">{date} </div>
          <h2>Clique para registrar seu ponto</h2>
          <button className="btn" onClick={registrarPonto}>
            Registrar Ponto
          </button>
        </section>
        <section className="logs">
          {registros.map((registro, index) => (
            <div key={index}>
              Data: {registro.data} - Hora: {registro.hora}
            </div>
          ))}
        </section>
      </main>
      <footer className="home-footer">
        Bar e Bocha - Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default HomePage;
