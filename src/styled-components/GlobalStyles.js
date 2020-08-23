import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --main-bg-color: ${(props) => props.theme.mainBgColor};
    --highlight-color: ${(props) => props.theme.highlightColor};
    --font-color: ${(props) => props.theme.fontColor};
    --highlight-contrast: ${(props) => props.theme.highlightContrast};
  }

  ::-webkit-scrollbar {
    width: 6px;
    border-left: 1px solid #E6ECF8;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollThumbColor};
    border-radius: 10px;
  }

  body {
    font-family: 'SLight'
  }

  body div {
    overflow: hidden;
    background-color: var(--main-bg-color);
  }

  p, span, h1, h2 {
    color: var(--font-color);
    animation: fadeIn 1s;
  }

  p {
    font-size: 1.3rem;
  }

  h2 {
    font-size: 2rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`;

export default GlobalStyles;
