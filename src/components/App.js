import { Route, BrowserRouter } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import DataBaseContext from "../contexts/DataBaseContext";
import Register from "./LandingPageComponents/Register.js";
import Login from "./LandingPageComponents/Login.js";
import Feed from "./FeedComponents/Feed.js";

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <DataBaseContext>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/feed" component={Feed}></Route>
        </DataBaseContext>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
