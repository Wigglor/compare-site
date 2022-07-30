import React from "react";

const CompareContext = React.createContext({
  items: [],
  addItem: (item) => {},
  //   removeItem: (id) => {},
});

export default CompareContext;
