import { useState, useEffect } from "react";

//Project files
import Modal from "./components/Modal";
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import "./styles/style.css";
import Logo from "./assets/mainlogo.jpg";
import {loadData} from "./scripts/loadData";
import {saveData} from "./scripts/loadData";

export default function App() {
  // Local state
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(null);
  const storageKey = "todo-list";

  // Methods
  useEffect(() => {
    const parseData = loadData(storageKey,setList);
    setList(parseData);
  }, []);

  useEffect(() => {
    const data = JSON.stringify(list);
    saveData(storageKey,data);
  }, [list]);

  return (
    <div className="App">
      <header className="header">
        <img src={Logo} data-testid="mainlogo" className="logo" alt="company logo" />
      </header>
      {list.length === 0 && (
        <WelcomeScreen list={list} setList={setList} setModal={setModal} />
      )}
      {list.length > 0 && (
        <ShoppingScreen setModal={setModal} list={list} setList={setList} />
      )}
      <Modal modalState={[modal, setModal]} list={list} setList={setList} />
    </div>
  );
}
