import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";

import { UserLoginTemplate } from "./templates/HomeTemplate/UserLoginTemplate";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import LoginCyberBugs from "./pages/CyberBugs/LoginCyberBugs/LoginCyberBugs";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
        <UserLoginTemplate exact path="/login" Component={LoginCyberBugs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
