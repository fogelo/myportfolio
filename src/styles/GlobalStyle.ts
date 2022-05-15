import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  //:root {
  //  --primary-color: #007bff;
  //  --secondary-color: #6c757d;
  //  --background-dark-color: #10121a;
  //  --background-dark-color-2: #191d2b;
  //  --border-color: #2e344e;
  //  --background-light-color: #f1f1f1;
  //  --background-light-color-2: rgba(3, 127, 255, .3);
  //  --white-color: #fff;
  //  --font-light-color: #a4acc4;
  //  --font-dark-color: #313131;
  //  --font-dark-color-2: #151515;
  //  --sidebar-dark-color: #191d2b;
  //  --scrollbar-bg-color: #191d2b;
  //  --scrollbar-thump-color: #191d2b;
  //  --scrollbar-track-color: #191d2b;
  //}


  .light-theme {
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-color-2: #E4E4E4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3, 127, 255, .3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
  }

  .dark-theme {
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-color-2: #191d2b;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3, 127, 255, .3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
  }


  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  :focus,
  :active {
    outline: none;
  }

  a:focus,
  a:active {
    outline: none;
  }

  nav,
  footer,
  header,
  aside {
    display: block;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1;
    background: #FAFAFA;
    font-size: 16px;
    color: #252B42;
    font-weight: 500;
    font-family: 'Nunito', sans-serif;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  input,
  button,
  textarea {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: 400;
    color: var(--white-color);
  }
  
  p {
    font-size: 1.25rem;
    line-height: 2rem;
    color: var(--font-light-color);
  }
`

export default GlobalStyle