import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import Modal from "./components/Modal";
import { useTypedSelector } from "./hooks/useTypedSelector";

function App() {
  const auth = useTypedSelector((state) => state.auth);
  const modal = useTypedSelector((state) => state.modal);
  console.log(auth);

  return <div className="App">
    {auth ? <Home /> : <Form />}
    {modal.show ? <Modal/> : ''}
    </div>;
}

export default App;
