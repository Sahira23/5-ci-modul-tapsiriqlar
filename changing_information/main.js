const express = require("express");
const app = express();
let users = require("./users.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.put("/user/:id", (req, res) => {
    const idOfUser = parseInt(req.body.id);
    const userIdx = users.findIndex((user) => user.id === idOfUser);

    if (userIdx !== -1) {
        const oldUser = users[userIdx];
        users[userIdx] = { ...oldUser, ...req.body };
        res.json(users[userIdx]);
    } else {
        res.status(404).json();
    }

});

app.delete("/user/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter((user) => user.id !== userId);
    res.json(users);
});
app.listen(3000, () => {
    console.log(`app litening on port 3000`);
});
