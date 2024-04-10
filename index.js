const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to EXPRESS APP !!!!!!");
});

app.get("/info", (req, res) => {
  res.send("Hey, this is an /info api");
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
