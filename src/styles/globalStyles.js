import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Engagement&display=swap');

  *{

    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }

  *:focus{
    outline:0;
  }

  html, body, .App  {
    height:100%;

  }

  #root{
    min-height:100vh;
  }

  html{
    font-size: 62.5%;

    @media (max-width: 700px) {
      max-height: 270px;
      font-size: 50.5%;
    }
    @media (max-width: 500px) {
      font-size: 40.5%;
    }
  }

  body{
    -webkit-font-smoothing: antialiased;
    max-width:1440px;
  }

  body, input, button{
    font: 1.2rem Arial, Helvetica, sans-serif;
    color:#010101;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer
  }

`;
