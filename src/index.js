import React from "react";
import { render } from "react-dom";
import 'normalize.css';
import App from "./app.js";
import { GlobalStyles } from "./global-styles.js";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
