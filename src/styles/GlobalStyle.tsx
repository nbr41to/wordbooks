import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: arial, sans-serif;
    position: relative;
    box-sizing: border-box;
    color: #333333;
    background-color: #eee;

    max-width: 375px;
    margin: 0 auto;
  }

  .box {
    border: 1px solid #ccc;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, .3);
  }
  /* size */
  .w100 {
    width: 100%;
  }

  /* flexbox */
  .flex {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .fcc {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fsbc {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .fccc {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .wrap {
    flex-wrap: wrap;
  }
  /* padding */
  .p-4 {
    padding: 4px;
  }
  .p-8 {
    padding: 8px;
  }
  .p-16 {
    padding: 16px;
  }
  .p-32 {
    padding: 32px;
  }

  /* margin */
  .m-4 {
    margin: 4px;
  }
  .m-8 {
    margin: 8px;
  }
  .m-16 {
    margin: 16px;
  }
  .m-32 {
    margin: 32px;
  }
  /* margin-top */
  .mt-4 {
    margin-top: 4px;
  }
  .mt-8 {
    margin-top: 8px;
  }
  .mt-16 {
    margin-top: 16px;
  }
  .mt-32 {
    margin-top: 32px;
  }
  /* margin-bottom */
  .mb-4 {
    margin-bottom: 4px;
  }
  .mb-8 {
    margin-bottom: 8px;
  }
  .mb-16 {
    margin-bottom: 16px;
  }
  .mb-32 {
    margin-bottom: 32px;
  }

`;
