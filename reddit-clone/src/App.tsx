import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./router/routes";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {routes.map((route, i) => (
          <Route {...route} key={i} />
        ))}
      </Switch>
    </Router>
  );
}

export default AppRouter;
