import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import Modal from "./components/Modal";
import { useTypedSelector } from "./hooks/useTypedSelector";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const auth = useTypedSelector((state) => state.auth);
  const modal = useTypedSelector((state) => state.modal);
  console.log(auth);

  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/auth">
              <Form />
            </Route>
            <Route path="/">
              {auth ? <Home /> : <Redirect to="/auth" />}
            </Route>
          </Switch>
        </div>
        {modal.show ? <Modal /> : ''}
      </Router>
  );
}

export default App;
