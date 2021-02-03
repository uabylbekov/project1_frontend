import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={CreatePage} path="/create" exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
