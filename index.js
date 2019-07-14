// index.js

import express from "express";
const app = express();

app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(3000, () => {});

import { createStore } from "redux";
import { NEW_TAB, CLOSE_TAB, newTab, closeTab } from "./actions";
import { reducer } from "./reducer";

const store = createStore(reducer);
store.subscribe(render);

// var div = document.createElement("div");
var render = function(template, node) {
  node.innerHTML = template;
};

var openTab = document
  .getElementById("openTab")
  .addEventListener("click", function() {
    store.dispatch(NEW_TAB);
  });
