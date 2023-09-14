import { createContext } from "react";

const DataContext = createContext({
  registros: [],
  setRegistros: () => {},
});

export default DataContext;
