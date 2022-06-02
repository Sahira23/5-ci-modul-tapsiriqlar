
const express = require("express");
const app = express();
const cards = [
  {
    id: 1,
    cardNumber: "6786234223423345",
  },
  {
    id: 2,
    cardNumber: "7854806497584563",
  },
  {
    id: 3,
    cardNumber: "8633965407352386",
  },
  {
    id: 4,
    cardNumber: "9734657457352456",
  },
  {
    id: 5,
    cardNumber: "2143934404756656",
  },
];

app.listen(3000, () => {
  console.log(`app litening on port 3000`);
});

app.get("/card", (req, res) => {
  res.json(cards);
});

app.get("/card/:id", (req, res) => {
  const id=parseInt(req.params.id)
  const card = cards.find((card) => card.id === id);
  if (!card) {
    res.status(404).send("Something went wrong");
  }
  res.status(200).send(card);
});