import { createGlobalStyle } from "styled-components";
import { colorVariables } from "./colorVariables";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: Poppins;
    outline: none;
  }
  
  body{
    font-size: 62.5%;
    height: 100vh;
    background-color: ${colorVariables.background};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
