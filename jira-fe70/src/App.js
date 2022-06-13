import "./App.css";
import { BrowserRouter, Router, Switch, useHistory } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";

import { UserLoginTemplate } from "./templates/HomeTemplate/UserLoginTemplate";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import LoginCyberBugs from "./pages/CyberBugs/LoginCyberBugs/LoginCyberBugs";
import { history } from "./util/history";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "ADD_HISTORY", history: history });
  }, []);
  return (
    <>
      <Router history={history}>
        <Switch>
          <HomeTemplate exact path="/" Component={Home} />
          <HomeTemplate exact path="/home" Component={Home} />
          <UserLoginTemplate exact path="/login" Component={LoginCyberBugs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
