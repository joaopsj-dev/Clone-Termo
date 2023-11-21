import styled from "styled-components";

export const Game = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > h1 {
    font-size: 3em;
    text-align: center;
  }

  h1 {
    color: #312a2c;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;