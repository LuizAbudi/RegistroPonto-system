import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import DescriptionIcon from "@mui/icons-material/Description";
import BadgeIcon from "@mui/icons-material/Badge";

export const SidebarData = [
  {
    title: "Início",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Registrar Ponto",
    icon: <AssignmentIcon />,
    link: "/Registro",
  },
  {
    title: "Configurações",
    icon: <SettingsIcon />,
    link: "/Configuracoes",
  },
  {
    title: "Relatórios",
    icon: <DescriptionIcon />,
    link: "/Relatorio",
  },
  {
    title: "Funcionários",
    icon: <BadgeIcon />,
    link: "/Funcionarios",
  },
];
