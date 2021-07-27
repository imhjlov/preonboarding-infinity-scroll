import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle};
`;

export default GlobalStyle;
