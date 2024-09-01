import styled from "styled-components";

export const Section = styled.section`
  min-height: 80vh;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 50vw;
  margin-top: 4rem;

  h2 {
    font-size: 3rem;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    width: 5vw;
    margin: 1rem 0 1rem 0;
    font-size: 1.2rem;
  }

  hr {
    border: solid;
  }
`;
