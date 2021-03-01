import { BrowserRouter as Router } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Routes from "./pages/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
