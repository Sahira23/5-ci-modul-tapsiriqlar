const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', function (req, res) {
    res.send("sahira")
  });
  app.get("/card", (req, res) => {
    res.send("this is card endpoint");
  });
  app.get("/client", (req, res) => {
    res.send("this is client endpoint");
  });
  
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
