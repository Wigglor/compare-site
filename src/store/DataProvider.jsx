import DataContext from "./data-context";
import { useState } from "react";

const DataProvider = (props) => {
  // const [cartState, dispatchCartAction] = useReducer(
  //   cartReducer,
  //   defaultCartState
  // );
  const [filterState, setfilterState] = useState([]);

  const filterItemsHandler = (item) => {
    // setfilterState((prevState) => {
    // return [...prevState, item];
    // });
    setfilterState(item);
    console.log(item);
    // return items;
  };

  const dataContext = {
    items: filterState,
    filterItems: filterItemsHandler,
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
