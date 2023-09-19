import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SidebarData } from "../components/SideBar/SidebarData";
import Inicio from "../pages/Home";
import Registro from "../pages/Registro";
import Relatorio from "../pages/Relatorio";
import Configuracoes from "../pages/Configuracoes";
import Funcionarios from "../pages/Funcionarios";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Components = {
  Inicio: Inicio,
  RegistrarPonto: Registro,
  Relatorios: Relatorio,
  Configuracoes: Configuracoes,
  Funcionarios: Funcionarios,
};

export const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  console.log(element);
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
            element={<PrivateRoute element={route.element} />}
            component={Components[route.title]}
          />
        );
      })}
    </Routes>
  );
};

export default Rotas;
