const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todo = require("./Models/Todo");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mahadneslit:PbaL7lxVaitPhgUh@crudcluster.r1q3x.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to MongoDB.");
  });

app.get("/get", (req, res) => {
  Todo.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/add", (req, res) => {
  console.log(req.body);
  const task = req.body.task;
  Todo.create({
    task: task,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
