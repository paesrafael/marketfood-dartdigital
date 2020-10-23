import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary: #255C99;
    --secondary: #7EA3CC;
    --white: #FFF;
    --gray-light: #F2F2F2;
    --text: #262626;
    --red: #B3001B;
    --platinum: #EBEBEB;
    --border: #50514F;
    --border-light: rgba(255, 255, 255, 0.22);
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    max-width: 100vw;
    max-height: 100vw;
    width: 100%;
    font: 600 18px Nunito, sans-serif !important;
    background: var(--platinum);
  }

  *, button, input {
    border: 0;
    background: 0;
    outline: none;
  }

  a {
    text-decoration: none !important;
  }

  .ReactModal__Overlay {
    z-index: 999;
  }

  .ReactModal__Content.ReactModal__Content--after-open {
    @media (max-width: 768px) {
      width: 80% !important;
    }
  }

  .react-tabs__tab-list {
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 50%;
    border-color: var(--secondary);

    @media (max-width: 1200px) {
      max-width: 90%;
    }
  }

  .react-tabs__tab--selected {
    color: var(--white) !important;
    border-color: var(--primary);
    background-color: var(--primary);
  }

  .react-tabs__tab {
    margin-right: 10px;
    color: var(--primary);
    border: 1px solid var(--secondary);
    border-bottom: 0;
    border-radius: 5px 5px 0 0;

    @media (max-width: 768px) {
      margin: 0 auto;
      width: 90%;
      border-bottom: 1px solid var(--secondary);

      &:first-child {
        margin-bottom: 10px;
      }
    }
  }
`
