import CompareContext from "./compare-context";
import { useRef, useState } from "react";

const cartReducer = (state, action) => {};

const CompareProvider = (props) => {
  // const [cartState, dispatchCartAction] = useReducer(
  //   cartReducer,
  //   defaultCartState
  // );
  const [cartState, setCompareState] = useState([]);

  const addItemToCompareHandler = (item) => {
    if (cartState.length < 4) {
      console.log(cartState.length);
      setCompareState((prevState) => {
        return [...prevState, item];
      });
    } else {
      alert("Only 4 items allowed");
    }
  };

  const removeItemFromCartHandler = (itemId) => {
    console.log(itemId);
    // const newState = cartState.filter((item) => {
    //   return item.id !== itemId;
    // });
    // setCompareState(newState);

    setCompareState(
      cartState.filter((item) => {
        return item.id !== itemId;
      })
    );
  };

  const compareContext = {
    items: cartState,
    addItem: addItemToCompareHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CompareContext.Provider value={compareContext}>
      {props.children}
    </CompareContext.Provider>
  );
};

export default CompareProvider;
