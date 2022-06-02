import React from "react";
import { render } from "react-dom";
import "normalize.css";
import App from "./App.js";
import { GlobalStyles } from "./global-styles.js";
import { firebaseApp } from "./firebase/firebase.prod.js";
import { FirebaseContext } from "./firebase/context.js";
render(
  <>
    <FirebaseContext.Provider value={{ firebaseApp }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
