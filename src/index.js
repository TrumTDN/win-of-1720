import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "assets/clear.css";
import "assets/font.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById("root"));

// serviceWorker.register();

if (module.hot && !window.frameElement) {
  console.log("HMR enabled");
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(<NextApp />, document.getElementById("root"));
  });
}

//AFTER FINISH RENDER
const delayInMilliseconds = 2500;
setTimeout(function () {
  //code to be exe after delay:
  document.getElementById("loader").remove();
  document.getElementById("root").style.visibility = "visible";
}, delayInMilliseconds);
