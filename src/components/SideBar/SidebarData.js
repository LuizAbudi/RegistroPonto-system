import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import DescriptionIcon from "@mui/icons-material/Description";
import BadgeIcon from "@mui/icons-material/Badge";
import Registro from "../../pages/Registro";
import Home from "../../pages/Home";
import Configuracoes from "../../pages/Configuracoes";
import Relatorio from "../../pages/Relatorio";
import Funcionarios from "../../pages/Funcionarios";

export const SidebarData = [
  {
    title: "Início",
    icon: <HomeIcon />,
    link: "/",
    element: <Home />,
  },
  {
    title: "Registrar Ponto",
    icon: <AssignmentIcon />,
    link: "/Registro",
    element: <Registro />,
  },
  {
    title: "Configurações",
    icon: <SettingsIcon />,
    link: "/Configuracoes",
    element: <Configuracoes />,
  },
  {
    title: "Relatórios",
    icon: <DescriptionIcon />,
    link: "/Relatorio",
    element: <Relatorio />,
  },
  {
    title: "Funcionários",
    icon: <BadgeIcon />,
    link: "/Funcionarios",
    element: <Funcionarios />,
  },
];
