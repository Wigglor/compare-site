import React from "react";

const DataContext = React.createContext({
  items: [],
  filterItems: (item) => {},
});

export default DataContext;
