import styled from "styled-components";

const CompareItem = (props) => {
  return (
    <CompareItemLi>
      <CompareItemLiInner>
        <span>{props.name}</span>
        <span>$ {props.price}</span>
        <span>$ {props.id}</span>
      </CompareItemLiInner>
    </CompareItemLi>
  );
};

export default CompareItem;

const CompareItemLi = styled.li`
  background-color: #282c34;
  list-style-type: none;
  color: #fff;
  padding: 1rem;
  margin: 1rem;
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
