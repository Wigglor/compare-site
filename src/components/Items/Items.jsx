import { Fragment, useState, useContext } from "react";
import ItemsDesc from "./ItemsDesc";
import AllItems from "./AllItems";
import CompareCard from "../CompareCard/CompareCard";
import CompareContext from "../../store/compare-context";
import DataProvider from "../../store/DataProvider";
import Modal from "../UI/Modal";

const Items = (props) => {
  const cartCtx = useContext(CompareContext);
  // const [compareIsShown, setCompareIsShown] = useState(false);
  console.log(props);
  // const showCompareHandler = () => {
  //   setCompareIsShown(true);
  // };

  // const hideCompareHandler = () => {
  //   setCompareIsShown(false);
  // };

  return (
    <Fragment>
      {/* // <DataProvider> */}
      <ItemsDesc />
      <AllItems filterState={props.filterInput} />
      {cartCtx.items.length > 0 && <CompareCard />}
    </Fragment>
    // </DataProvider>
  );
};

export default Items;
