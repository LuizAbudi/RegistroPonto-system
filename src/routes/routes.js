import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SidebarData } from "../components/SideBar/SidebarData";
import Inicio from "../pages/Home";
import Registro from "../pages/Registro";
import Relatorio from "../pages/Relatorio";
import Configuracoes from "../pages/Configuracoes";
import Funcionarios from "../pages/Funcionarios";
import Login from "../pages/Login";
import RelatorioPresenca from "../pages/RelatorioPresenca";
import RelatorioPagamento from "../pages/RelatorioPagamento";
import CadastroFuncionario from "../pages/CadastroFuncionario";

const Components = {
  Inicio: Inicio,
  RegistrarPonto: Registro,
  Relatorios: Relatorio,
  Configuracoes: Configuracoes,
  Funcionarios: Funcionarios,
};

export const PrivateRoute = ({ element, path }) => {
  const isAuthenticated = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("type");

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (path === "/configuracoes" && isAdmin !== "admin") {
    alert("Você não tem acesso a essa página, pois você não é um Admin");

    return <Navigate to="/home" replace />;
  }

  return element;
};

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {SidebarData.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.link}
            element={<PrivateRoute element={route.element} path={route.link} />}
            component={Components[route.title]}
          />
        );
      })}
      <Route
        path="/configuracoes/relatorioPresenca"
        element={<RelatorioPresenca />}
      />
      <Route
        path="/configuracoes/relatorioPagamento"
        element={<RelatorioPagamento />}
      />
      <Route
        path="/configuracoes/relatorioCadastroNovoFuncionario"
        element={<CadastroFuncionario />}
      />
    </Routes>
  );
};

export default Rotas;
