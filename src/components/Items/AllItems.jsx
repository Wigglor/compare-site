import styled from "styled-components";
import Card from "../UI/Card";
import Item from "./Item/Item";
import DataContext from "../../store/data-context";
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
  {
    id: "m5",
    name: "Spicy Ramen",
    description: "hot...",
    price: 13.99,
  },
  {
    id: "m6",
    name: "Pizza",
    description: "delicious slices",
    price: 11.99,
  },
  {
    id: "m7",
    name: "Kobe beef",
    description: "For fine tasters",
    price: 99.99,
  },
  {
    id: "m8",
    name: "Pasta Bolognese",
    description: "An Italian classic",
    price: 12.99,
  },
];

const AllItems = (props) => {
  const mealsList = DUMMY_MEALS.filter((meal) =>
    meal.name.match(new RegExp(props.filterState, "i"))
  ).map((meal) => {
    return (
      <Item
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        // onShowCompare={onShowCompare}
      />
    );
  });

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
