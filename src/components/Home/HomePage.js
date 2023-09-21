import React, { useState, useEffect, useContext } from "react";
import "../global/globalStyles.css";
import "./HomeStyles.css";
import DataContext from "../../utils/DataContext";
import { pegarDataHoraAtual } from "../../utils/LogPontoData";

function HomePage() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date] = useState(new Date().toLocaleDateString());

  const { setRegistros } = useContext(DataContext);

  const registrarPonto = () => {
    const novoPonto = pegarDataHoraAtual();

    // Recuperar pontos do dia atual do localStorage
    const pontosDoDia = JSON.parse(localStorage.getItem(date) || "[]");

    if (pontosDoDia.length >= 2) {
      alert(
        "Você já registrou 2 pontos no dia de Hoje. Não é possível registrar mais."
      );
      return;
    }

    pontosDoDia.push(novoPonto);
    localStorage.setItem(date, JSON.stringify(pontosDoDia));

    setRegistros((prev) => {
      return [...prev, novoPonto];
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Controle de Ponto - Bar e Bocha</h1>
      </header>
      <main className="home-main">
        <section>
          <div className="clock">{time}</div>
          <div className="date">{date}</div>
          <h2>Clique para registrar seu ponto</h2>
          <button className="btn" onClick={registrarPonto}>
            Registrar Ponto
          </button>
        </section>
        <div className="teste">
          <div className="logs">
            {Object.keys(localStorage)
              .filter((key) => key.includes("/")) // Assumindo que as chaves de data incluem "/"
              .sort((a, b) => {
                // Convertendo a data de "DD/MM/YYYY" para "YYYY-MM-DD"
                const convertDate = (dateStr) => {
                  const [day, month, year] = dateStr.split("/");
                  return `${year}-${month}-${day}`;
                };
                return Date.parse(convertDate(a)) - Date.parse(convertDate(b));
              })
              .map((data) => {
                const pontos = JSON.parse(localStorage[data]);
                return (
                  <div key={data}>
                    Dia: {data}
                    <div>Entrada: {pontos[0]?.hora || ""}</div>
                    <div>Saída: {pontos[1]?.hora || ""}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
      <footer className="home-footer">
        Bar e Bocha - Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default HomePage;
