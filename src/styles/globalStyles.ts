import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  em {
    font-style: italic;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  p, h1, h2, h3, h4, h5 {
    line-height: 1.4;
  }

  h1, h2, h3, h4, h5 {
    margin-bottom: 10px;
  }

  body {
    font-family: "PingFang TC", 微軟正黑體, sans-serif;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.65);
    background-color: rgb(243, 243, 241);
    margin: 0px;
    padding: 0px;
    min-height: 100vh;
    min-height: 100dvh;
  }
`;

export default GlobalStyle;