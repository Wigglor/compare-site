import { useContext } from "react";
import Modal from "../UI/Modal";
import CompareContext from "../../store/compare-context";
import CompareItem from "./CompareItem";
import styled from "styled-components";

const CompareCard = (props) => {
  const cartCtx = useContext(CompareContext);

  // const cartItemRemoveHandler = (id) => {
  //   cartCtx.removeItem(id);
  // };

  // const cartItemAddHandler = (item) => {
  //   cartCtx.addItem({ ...item, amount: 1 });
  // };

  const compareItems = (
    <CompareItemsUl>
      {cartCtx.items.map((item) => (
        <CompareItem
          key={item.id}
          name={item.name}
          price={item.price}
          //   onRemove={cartItemRemoveHandler.bind(null, item.id)}
          //   onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </CompareItemsUl>
  );

  return <Modal onClose={props.onClose}>{compareItems}</Modal>;
};

export default CompareCard;

const CompareItemsUl = styled.ul`
  display: flex;
`;
