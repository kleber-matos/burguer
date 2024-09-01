import styled, { css } from "styled-components";

export const Header = styled.header`
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  background-color: #222222;

  ul {
    display: flex;
    justify-content: space-evenly;
    width: 20vw;
    min-width: 100px;
    max-width: 300px;
  }

  img {
    margin-left: 15px;
  }

  a {
    color: white;

    &:hover {
      color: #cfcfcf;
    }
  }
`;
