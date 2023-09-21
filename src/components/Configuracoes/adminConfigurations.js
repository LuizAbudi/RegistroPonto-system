import Tester, { Cleaner } from "../../tests/PontoTester";
import "./adminConfigurations.css";
import React from "react";

function adminConfigurations() {
  return (
    <div>
      <button className="btn" onClick={Tester}>
        Ver Pontos
      </button>
      <button className="btn" onClick={Cleaner}>
        Limpar Pontos
      </button>
    </div>
  );
}

export default adminConfigurations;
