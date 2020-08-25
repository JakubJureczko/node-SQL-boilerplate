require('dotenv').config()
const express = require("express");
const { Pool } = require('pg');

const app = express();
const pool = new Pool();

app.get("/", (req, res) => res.send("hello world"));

app.listen('3000', () => console.log('connected'));