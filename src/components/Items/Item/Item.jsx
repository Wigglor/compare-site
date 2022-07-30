import styled from "styled-components";
import { BiGitCompare } from "react-icons/bi";
import CompareContext from "../../../store/compare-context";
import { useContext } from "react";

const Item = (props) => {
  const compareCtx = useContext(CompareContext);

  const price = `$${props.price.toFixed(2)}`;

  const compare = (e) => {
    compareCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
    });
  };

  return (
    <ItemLi>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <CompareDiv>
        {/* <p>Compare</p> */}
        <BiGitCompare
          size={25}
          style={{ cursor: "pointer" }}
          onClick={compare}
        />
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
