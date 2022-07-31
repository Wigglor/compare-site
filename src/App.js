import { Fragment, useContext, useState } from "react";
import Items from "./components/Items/Items";
import Header from "./components/Layout/Header";
import CompareProvider from "./store/CompareProvider";
import CompareContext from "./store/compare-context";
import Modal from "./components/UI/Modal";

function App() {
  // const cartCtx = useContext(CompareContext);
  // console.log("Toggle Modal");

  return (
    <CompareProvider>
      <Header />
      <Items />
      {/* {cartCtx.items.length > 0 && <Modal />} */}
    </CompareProvider>
  );
}

export default App;
