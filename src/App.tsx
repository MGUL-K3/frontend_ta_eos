import React, { useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { IAuth } from "./Redux/reducers/auth";

function App() {
  const auth = useTypedSelector((state) => state.auth);
  console.log(auth);

  return <div className="App">{auth ? <Home /> : <Form />}</div>;
}

export default App;
