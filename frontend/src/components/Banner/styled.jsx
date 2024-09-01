import styled from "styled-components";
import Banner from "../../assets/banner.png";

export const Section = styled.section`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: start;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${Banner});

  h2 {
    width: 40vw;
    color: white;
    font-size: 4rem;
    text-align: center;
  }
`;
