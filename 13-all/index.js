import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";

const buttonEl = <Button bg="blue" color="white">Hey</Button>
ReactDOM.render(buttonEl , document.querySelector("#root"));
