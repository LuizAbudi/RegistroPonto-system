import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import "./SidebarStyle.css";
import SidebarButton from "./SidebarButton";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
