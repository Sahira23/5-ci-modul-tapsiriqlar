const express = require("express");
const app = express();
const data = require("./data.json");


app.get("/", (req, res) => {
       res.send(data)
});

app.listen(8800, () => {
  console.log(`app listening 8800`);
});