import React from "react";
import { useNavigate } from "react-router-dom";
import CadastrarNovoFuncionario from "../components/Configuracoes/CadastrarNovoFuncionario";

function CadastroFuncionario() {
  const navigate = useNavigate();

  const navegacao = () => {
    navigate("/configuracoes");
  };

  return (
    <div>
      <div className="home-container">
        <header className="home-header">
          <h1>Cadastro Novo Funcionário</h1>
        </header>
        <div className="botoes">
          <button className="button-config" onClick={navegacao}>
            Voltar
          </button>
        </div>
        <main className="home-main">
          <CadastrarNovoFuncionario />
        </main>
        <footer className="home-footer">
          Bar e Bocha - Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}

export default CadastroFuncionario;
