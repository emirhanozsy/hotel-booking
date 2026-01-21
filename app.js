const express = require("express");
const dotenv = require("dotenv");

const dbConn = require("./config/dbConn");

const app = express();

dotenv.config();
dbConn();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API çalışıyor, MongoDB bağlandı");
});

module.exports = app;