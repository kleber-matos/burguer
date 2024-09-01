import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60vw;
  max-width: 600px;
  height: 40vh;
  /* border: solid; */

  h2 {
    font-size: 4rem;
  }

  label {
    border-left: solid 6px #ea9d02;
    padding-left: 5px;
  }

  input,
  select {
    outline: none;
    height: 4vh;
    border: solid 2px;
  }

  input {
    padding-left: 1rem;
  }

  select {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background-color: #4fa629;
  border: none;
  cursor: pointer;
  height: 5vh;
  width: 60vw;
  max-width: 600px;
  margin-top: 1rem;
  color: white;
  font-size: 1rem;

  &:hover {
    background-color: #408820;
    transition: 0.5s;
    color: #d4d4d4;
  }
`;
