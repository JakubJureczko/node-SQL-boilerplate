require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const app = express();
const pool = new Pool();

app.get("/", (req, res) => res.send("hello world"));

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query(`SELECT * FROM users WHERE id=$1;`, [id])
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(404));
});

app.listen("3000", () => console.log("connected"));
