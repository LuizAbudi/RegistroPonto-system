import React from "react";
import "./adminConfigurations.css";
import { useNavigate } from "react-router-dom";

const AdminConfigurations = () => {
  const navigate = useNavigate();

  const relatorioPresenca = () => {
    navigate("/configuracoes/relatorioPresenca");
  };
  const relatorioPagamento = () => {
    navigate("/configuracoes/relatorioPagamento");
  };
  const mudarValor = () => {
    navigate("/configuracoes/relatorioMudaValor");
  };
  const novoCadastro = () => {
    navigate("/configuracoes/relatorioCadastroNovoFuncionario");
  };

  return (
    <div>
      <div className="home-container">
        <header className="home-header">
          <h1>Configurações</h1>
        </header>
        <main className="home-main">
          <div className="botoes">
            <button className="button-config" onClick={relatorioPresenca}>
              Gerar Relatório Presença
            </button>
            <button className="button-config" onClick={relatorioPagamento}>
              Gerar Relatório Pagamento
            </button>
            <button className="button-config" onClick={mudarValor}>
              Mudar valor de pagamento
            </button>
            <button className="button-config" onClick={novoCadastro}>
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
};

export default AdminConfigurations;
