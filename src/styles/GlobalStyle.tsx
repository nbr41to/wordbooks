import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
      helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    position: relative;
    box-sizing: border-box;
    color: #333333;
    background-color: #fff;
  }

  .box {
    border: 1px solid black;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
  }
  .flex {
    display: flex;
  }
  .column {
    flex-direction: column;
  }

/* burger */
  
`;
