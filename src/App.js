import Sidebar from "./components/SideBar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./routes/routes";


function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Rotas />
      </div>
    </Router>
  );
}

export default App;
