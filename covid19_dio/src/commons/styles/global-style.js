import { createGlobalStyle } from 'styled-components'
import CovidImg from '../../assets/images/covid.jpg'

const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root {
    background: url(${CovidImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2 {
    margin-bottom: 16px;
  }

  .pt-2 {
    padding-top: 16px;
  }

  .pt-3 {  
    display: flex;     
    justify-content: flex-end;  
  }

  .pt-4 {  
    display: flex;    
    justify-content: center;  
  }

  .cursor {
    cursor: pointer;
  }

  #divMaior{
    display: flex;    
    justify-content: flex-end;
  }

  #btnPanel{    
    display: flex;
    justify-content: flex-end;
    padding: 5px;   
    
  }

`

export default globalStyle