"use strict";
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.get('/', function (req, res) { return res.send('Hello World!'); });
app.listen(5000, function () {
    console.log("server has started on port 5000");
});
