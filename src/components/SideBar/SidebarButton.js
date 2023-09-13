import React from "react";
import "./SidebarButton.css";
import MenuIcon from "@mui/icons-material/Menu";

function SidebarButton({ toggleSidebar }) {
  return (
    <button className="SidebarButton" onClick={toggleSidebar}>
      <MenuIcon style={{ color: "white" }} />
    </button>
  );
}

export default SidebarButton;
