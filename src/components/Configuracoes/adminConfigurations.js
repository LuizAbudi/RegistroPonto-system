import { InjectPontos } from "../../tests/PontoTester";
import "./adminConfigurations.css";
import React from "react";

function adminConfigurations() {
  return (
    <div>
      <button className="btn" onClick={InjectPontos}>
        Ver Pontos
      </button>
    </div>
  );
}

export default adminConfigurations;
