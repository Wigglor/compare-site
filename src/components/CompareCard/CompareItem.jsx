import styled from "styled-components";
import { IoIosTrash } from "react-icons/io";
import CompareContext from "../../store/compare-context";
import { useContext } from "react";

const CompareItem = (props) => {
  const compareCtx = useContext(CompareContext);

  const removeItem = (e) => {
    console.log(e);
    console.log(props);
    compareCtx.removeItem(props.id);
  };
  return (
    <CompareItemLi>
      <CompareItemLiInner>
        <span>{props.name}</span>
        <span>$ {props.price}</span>
        <span>$ {props.id}</span>
      </CompareItemLiInner>
      <CompareItemLiInnerRemove>
        <IoIosTrash onClick={removeItem} />
      </CompareItemLiInnerRemove>
    </CompareItemLi>
  );
};

export default CompareItem;

const CompareItemLi = styled.li`
  background-color: #282c34;
  // background-color: #da2c2c;
  list-style-type: none;
  color: #fff;
  padding: 1rem;
  margin: 1rem;
  position: relative;
  //   display: flex;
  //   flex-direction: column;
`;

const CompareItemLiInner = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin: 0.5rem 0.5rem;
  }
`;

const CompareItemLiInnerRemove = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;
