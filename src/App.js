import { BrowserRouter as Router } from "react-router-dom";
import CurrentUserChecker from "./components/currentUserChecker/currentUserChecker";
import Topbar from "./components/Topbar/Topbar";
import Routes from "./pages/routes";

function App() {
  return (
    <div className="App">
      <CurrentUserChecker>
        <Router>
          <Topbar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </div>
  );
}

export default App;
