import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import "./SidebarStyle.css";
import SidebarButton from "./SidebarButton";
import LogOut from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <SidebarButton toggleSidebar={toggleSidebar} />
      <div className={`Sidebar ${isOpen ? "open" : ""}`}>
        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            );
          })}
          <li className="row" onClick={logOut}>
            <div id="icon">
              <LogOut />
            </div>
            <div id="title">Sair</div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
