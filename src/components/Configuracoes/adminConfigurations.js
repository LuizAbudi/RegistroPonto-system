import "./adminConfigurations.css";
import React from "react";

function adminConfigurations() {
  return (
    <div>
      <div className="home-container">
        <header className="home-header">
          <h1>Configurações</h1>
        </header>
        <main className="home-main">
          <div className="botoes">
            <button className="button-config" /*onClick={}*/>
              Gerar Relatório Presença
            </button>
            <button className="button-config" /*onClick={}*/>
              Gerar Relatório Pagamento
            </button>
            <button className="button-config" /*onClick={}*/>
              Mudar valor de pagamento
            </button>
            <button className="button-config" /*onClick={}*/>
              Cadastrar novo funcionário
            </button>
          </div>
        </main>
        <footer className="home-footer">
          Bar e Bocha - Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}

export default adminConfigurations;
