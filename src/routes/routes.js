import { Route, Routes } from "react-router-dom";
import { SidebarData } from "../components/SideBar/SidebarData";
import Inicio from "../pages/Home";
import Registro from "../pages/Registro";
import Relatorio from "../pages/Relatorio";
import Configuracoes from "../pages/Configuracoes";
import Funcionarios from "../pages/Funcionarios";

const Components = {
  Inicio: Inicio,
  RegistrarPonto: Registro,
  Relatorios: Relatorio,
  Configuracoes: Configuracoes,
  Funcionarios: Funcionarios,
};

const Rotas = () => {
  return (
    <Routes>
      {SidebarData.map((route, index) => (
        <Route
          key={index}
          path={route.link}
          exact
          Component={Components[route.title]}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default Rotas;
