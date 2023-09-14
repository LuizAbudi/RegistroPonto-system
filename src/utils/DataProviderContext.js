import React, { useState } from "react";
import DataContext from "./DataContext";

const DataContextProvider = ({ children }) => {
  const [registros, setRegistros] = useState([]);

  return (
    <DataContext.Provider value={{ registros, setRegistros }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
