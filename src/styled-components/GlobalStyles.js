import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --main-bg-color: ${(props) => props.theme.mainBgColor};
    --highlight-color: ${(props) => props.theme.highlightColor};
    --font-color: ${(props) => props.theme.fontColor};
    --highlight-contrast: ${(props) => props.theme.highlightContrast};
    --border-color: ${(props) => props.theme.borderColor};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollThumbColor};
  }

  body div {
    background-color: var(--main-bg-color);
  }

  p, span, h1, h2 {
    color: var(--font-color);
  }
`;

export default GlobalStyles;
