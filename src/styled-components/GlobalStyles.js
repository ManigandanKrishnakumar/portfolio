import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${(props) => props.theme.primary};
    --seconday-color: ${(props) => props.theme.seconday};
    --tertiary-color: ${(props) => props.theme.tertiary};
  }
`;

export default GlobalStyles;
