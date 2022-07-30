import styled from "styled-components";

const ItemsDesc = () => {
  return (
    <Desc>
      <DescChild>
        <DescTitle>All items</DescTitle>
        <p>Choose and compare among different items.</p>
      </DescChild>
    </Desc>
  );
};

export default ItemsDesc;

const Desc = styled.section`
  display: flex;
  justify-content: center;
`;

const DescChild = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescTitle = styled.h2`
  text-align: center;
`;
