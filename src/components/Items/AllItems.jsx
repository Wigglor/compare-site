import styled from "styled-components";
import Card from "../UI/Card";
import Item from "./Item/Item";
import CompareContext from "../../store/compare-context";
import { useContext, useState } from "react";
import Modal from "../UI/Modal";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AllItems = (props) => {
  // const compareCtx = useContext(CompareContext);

  // if (compareCtx.items.length > 0) {
  //   console.log(compareCtx.items.length);
  // }

  const mealsList = DUMMY_MEALS.map((meal) => (
    <Item
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      // onShowCompare={onShowCompare}
    />
  ));

  return (
    <AllItemsSection>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </AllItemsSection>
  );
};

export default AllItems;

const AllItemsSection = styled.section`
  display: flex;
  justify-content: center;
`;
