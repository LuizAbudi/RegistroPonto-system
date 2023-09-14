import Sidebar from "./components/SideBar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./routes/routes";
import DataContextProvider from "./utils/DataProviderContext";

function App() {
  return (
    <Router>
      <DataContextProvider>
        <div className="App">
          <Sidebar />
          <Rotas />
        </div>
      </DataContextProvider>
    </Router>
  );
}

export default App;
