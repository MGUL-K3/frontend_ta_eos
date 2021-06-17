import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import Modal from "./components/Modal";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRouter from "./components/ProtectedRouter";
import { useActions } from "./hooks/useActions";
import { useEffect } from "react";

function App() {
  const auth = useTypedSelector((state) => state.auth);
  const modal = useTypedSelector((state) => state.modal);
  const inside = useTypedSelector((state) => state.inside.inside);
  const {isInside} = useActions();
  console.log('user', auth);
  console.log('inside', inside)

  useEffect(() => {
    isInside();
  }, [])

  return (
    <div className="App">
      {/* <Switch>
        <Route exact path="/" component={Form}/>
        <ProtectedRouter path="/home" component={Home}/>
      </Switch> */}
      {modal.show ? <Modal /> : ""}

      {inside ? <Home /> : <Form/>}
    </div>
  );
}

export default App;
