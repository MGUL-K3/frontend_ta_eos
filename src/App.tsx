import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import { useTypedSelector } from "./hooks/useTypedSelector";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const auth = useTypedSelector((state) => state.auth);
  console.log(auth);

  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/auth">
              <Form />
            </Route>
            <Route path="/">
              {auth ? <Home /> : <Redirect to="/auth" />}
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
