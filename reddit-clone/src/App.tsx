import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { PostDetails } from "./components/PostDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

function AppRouter() {
  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/comments/:id" exact component={PostDetails} />
      </Router>
    </>
  );
}

export default AppRouter;
