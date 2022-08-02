import styled from "styled-components";
import { BiGitCompare } from "react-icons/bi";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import CompareContext from "../../../store/compare-context";
import { useContext, useState } from "react";

const Item = (props) => {
  const [itemIsAdded, setItemIsAdded] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const compareCtx = useContext(CompareContext);

  const price = `$${props.price.toFixed(2)}`;

  // const compare = (e) => {
  //   if (itemIsAdded) {
  //     setItemIsAdded(false);
  //   } else {
  //     compareCtx.addItem({
  //       id: props.id,
  //       name: props.name,
  //       price: props.price,
  //     });
  //     setItemIsAdded(true);
  //   }
  // };

  const compare = (e, state) => {
    // e.target.style.color = "#5e9639";
    console.log(state.action);
    if (state.action === "add") {
      compareCtx.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
      });
      console.log(compareCtx.items);
    } else if (state.action === "remove") {
      compareCtx.removeItem(props.id);
    }
  };

  return (
    <ItemLi>
      <div>
        <h3>{props.name}</h3>
        <p>id: {props.id}</p>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <CompareDiv>
        {!compareCtx.items.some((item) => item.id === props.id) ? (
          <IoIosAddCircle
            size={25}
            style={{ cursor: "pointer" }}
            onClick={(e) => compare(e, { action: "add" })}
            // addedState={true}
          />
        ) : (
          <IoIosRemoveCircle
            size={25}
            style={{ cursor: "pointer", color: "#da2c2c" }}
            onClick={(e) => compare(e, { action: "remove" })}
            // addedState={true}
          />
        )}

        {/* {!compareCtx.items.includes(props) && (
          <IoIosAddCircle
            size={25}
            style={{ cursor: "pointer"}}
            onClick={(e) => compare(e, props)}
            // addedState={true}
          />
        )}
        {compareCtx.items.includes(props) && (
          <IoIosRemoveCircle
            size={25}
            style={{ cursor: "pointer", color: "#5e9639" }}
            onClick={(e) => compare(e, props)}
            // addedState={true}
          />
        )} */}
      </CompareDiv>
    </ItemLi>
  );
};

export default Item;

const ItemLi = styled.section`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  background: #282c34;
  color: #fff;
  padding: 1rem;
  margin: 1rem 1rem;
  width: 30vw;
  border-radius: 1rem;
`;

const CompareDiv = styled.div`
  //   list-style-type: none;
  //   background: #282c34;
  //   color: #fff;
  //   padding: 1rem;
  //   margin: 1rem 1rem;
  //   width: 30vw;
  //   border-radius: 1rem;
`;
