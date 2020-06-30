import * as React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import RevealContainer from './RevealContainer'

const domContainer = document.querySelector("#container");
console.log(domContainer);
ReactDOM.render(<RevealContainer />, domContainer);

