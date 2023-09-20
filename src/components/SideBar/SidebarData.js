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
    link: "/home",
    element: <Home />,
  },
  {
    title: "Registro de Ponto",
    icon: <AssignmentIcon />,
    link: "/registro",
    element: <Registro />,
  },
  {
    title: "Configurações",
    icon: <SettingsIcon />,
    link: "/configuracoes",
    element: <Configuracoes />,
  },
  {
    title: "Relatórios",
    icon: <DescriptionIcon />,
    link: "/relatorio",
    element: <Relatorio />,
  },
  {
    title: "Funcionários",
    icon: <BadgeIcon />,
    link: "/funcionarios",
    element: <Funcionarios />,
  },
];
