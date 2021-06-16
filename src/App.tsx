import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import { useTypedSelector } from "./hooks/useTypedSelector";

function App() {
  const auth = useTypedSelector((state) => state.auth);
  console.log(auth);

  return <div className="App">{auth ? <Home /> : <Form />}</div>;
}

export default App;
