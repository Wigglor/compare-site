import { Fragment, useContext, useState } from "react";
import Items from "./components/Items/Items";
import Header from "./components/Layout/Header";
import CompareProvider from "./store/CompareProvider";
import CompareContext from "./store/compare-context";
import Modal from "./components/UI/Modal";

function App() {
  const [filterState, setfilterState] = useState("");
  const submitInput = (e) => {
    setfilterState(e.target.value);
  };
  return (
    <CompareProvider>
      <Header onChange={submitInput} />
      <Items filterInput={filterState} />
    </CompareProvider>
  );
}

export default App;
