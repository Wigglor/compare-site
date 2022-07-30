import { Fragment } from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Fragment>
      <Header_>
        <h1>Items</h1>
      </Header_>
    </Fragment>
  );
};

export default Header;

const Header_ = styled.header`
  margin: 0rem 0rem;
  padding: 1rem;
  background-color: #181325;
`;
