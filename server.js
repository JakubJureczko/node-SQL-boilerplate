require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const app = express();
const pool = new Pool();

app.get("/", (req, res) => res.send("hello world"));

app.get("/users", (req, res) => {
  pool
    .query('SELECT * FROM users')
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(500));
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query(`SELECT * FROM users WHERE id=$1;`, [id])
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(500));
});

app.get("/orders", (req, res) => {
  pool
    .query('SELECT * FROM orders')
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(500));
});

app.get("/orders/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query(`SELECT * FROM orders  WHERE id=$1;`, [id])
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(500));
});

app.listen("3000", () => console.log("connected"));
