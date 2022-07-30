import { Fragment } from "react";
import Items from "./components/Items/Items";
import Header from "./components/Layout/Header";
import CompareProvider from "./store/CompareProvider";

function App() {
  return (
    <CompareProvider>
      <Header />
      <Items />
    </CompareProvider>
  );
}

export default App;
