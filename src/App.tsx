import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import Modal from "./components/Modal";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRouter from "./components/ProtectedRouter";

function App() {
  const auth = useTypedSelector((state) => state.auth);
  const modal = useTypedSelector((state) => state.modal);
  console.log(auth);

  return (
    <div className="App">
      {/* <Switch>
        <Route exact path="/" component={Form}/>
        <ProtectedRouter path="/home" component={Home}/>
      </Switch> */}
      {modal.show ? <Modal /> : ""}

      {auth ? <Home /> : <Form/>}
    </div>
  );
}

export default App;
