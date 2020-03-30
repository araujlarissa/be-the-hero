import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: ${(props) => props.theme.colors.background};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  button, input, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  /* Estiliza a descrição da section do form */
  section h1 {
    color: ${(props) => props.theme.colors.textBold};
    margin: 64px 0 32px;
    font-size: 32px;
  }

  section p {
    font-size: 18px;
    color: ${(props) => props.theme.colors.textMedium};
    line-height: 32px;
  }
`;
