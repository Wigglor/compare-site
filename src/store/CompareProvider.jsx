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
    //   dispatchCartAction({ type: 'ADD', item: item });
    setCompareState((prevState) => {
      return [...prevState, item];
    });

    // console.log("ADD");
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
    // console.log(newState);

    // console.log("REMOVE");
  };

  // const cartContext = {
  //   items: cartState.items,
  //   addItem: addItemToCartHandler,
  //   removeItem: removeItemFromCartHandler,
  // };

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
