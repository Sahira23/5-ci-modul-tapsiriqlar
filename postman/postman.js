const phonebook = [];

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/phonebook", (req, res) => {
  phonebook.push(req.body);
  res.json(req.body);
});
app.get("/phonebook", (req, res) => {
  res.json(phonebook);
});
app.listen(3000, () => {
  console.log(`App listening at port 3000`);
});