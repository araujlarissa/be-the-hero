import { createGlobalStyle } from 'styled-components';

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
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  /* Seleciona a div Container */
  div:nth-child(1) {
    width: 100%;
    max-width: 1120px;
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

  /* Estiliza a tag Link com o ícone */
  section a {
    display: flex;
    align-items: center;
    margin-top: 38px;
    color:  ${(props) => props.theme.colors.textBold};
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  section a:hover {
    opacity: 0.8;
  }

  section a svg {
    margin-right: 8px;
  }
`;
