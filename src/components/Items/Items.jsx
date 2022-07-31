import { Fragment, useState, useContext } from "react";
import ItemsDesc from "./ItemsDesc";
import AllItems from "./AllItems";
import CompareCard from "../CompareCard/CompareCard";
import CompareContext from "../../store/compare-context";
import Modal from "../UI/Modal";

const Items = (props) => {
  const cartCtx = useContext(CompareContext);
  // const [compareIsShown, setCompareIsShown] = useState(false);

  // const showCompareHandler = () => {
  //   setCompareIsShown(true);
  // };

  // const hideCompareHandler = () => {
  //   setCompareIsShown(false);
  // };

  return (
    <Fragment>
      {/* {compareIsShown && <CompareCard onClose={hideCompareHandler} />} */}
      <ItemsDesc />
      {/* <AllItems onShowCompare={showCompareHandler} /> */}
      <AllItems />
      {cartCtx.items.length > 0 && <CompareCard />}
    </Fragment>
  );
};

export default Items;
