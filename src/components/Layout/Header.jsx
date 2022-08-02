import { Fragment } from "react";
import styled from "styled-components";

const Header = (props) => {
  const submitInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <Fragment>
      <Header_>
        <SearchArea>
          {/* <searchArea> */}
          <form action="/">
            <input type="text" id="fname" name="fname" onChange={submitInput} />
          </form>
        </SearchArea>
      </Header_>
    </Fragment>
  );
};

export default Header;

const SearchArea = styled.div`
  display: flex;
  justify-content: center;
`;

const Header_ = styled.header`
  margin: 0rem 0rem;
  padding: 1rem;
  background-color: #181325;
`;
