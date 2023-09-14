import React, { useState, useEffect } from "react";
import "../global/global.styles.css";
import "./HomeStyles.css";

function HomePage() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date] = useState(new Date().toLocaleDateString());
  const [logTimes, setLogTimes] = useState([]);
  const [logDate, setLogDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  const showPonto = () => {
    if (logTimes.length < 8) {
      setLogTimes((prevTimes) => [
        ...prevTimes,
        new Date().toLocaleTimeString(),
      ]);

      if (logDate[logDate.length - 1] !== new Date().toLocaleDateString()) {
        setLogDate((prevDates) => [
          ...prevDates,
          new Date().toLocaleDateString(),
        ]);
      }
    }
  };

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
          <button className="btn" onClick={showPonto}>
            Registrar Ponto
          </button>
        </section>
        <section className="logs">
          {logTimes.map((logTime, index) => (
            <div key={index}>
              Registrado: {logDate[logDate.length - 1] || ""} - {logTime}
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
