import React from "react";
import { useNavigate } from "react-router-dom";
import TabelaPresencaFuncionario from "../components/Configuracoes/TabelaPresencaFuncionario";

function RelatorioPresenca() {
  const navigate = useNavigate();

  const navegacao = () => {
    navigate("/configuracoes");
  };

  return (
    <div>
      <div className="home-container">
        <header className="home-header">
          <h1>Relatorio Presenca</h1>
        </header>
        <div className="botoes">
          <button className="button-config" onClick={navegacao}>
            Voltar
          </button>
        </div>
        <main className="home-main">
          
          <TabelaPresencaFuncionario />
        </main>
        <footer className="home-footer">
          Bar e Bocha - Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}

export default RelatorioPresenca;
