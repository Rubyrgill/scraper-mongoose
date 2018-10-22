//Depedencies 
//------------------------------------
var express = require("express");
// var logger = require("morgan");
var exphbs = require("express-handlebars");
var cheerio = require("cheerio");
var axios = require("axios");
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser")

//Initalize 
//------------------------------------
var app = express();

//PORT
//------------------------------------
var PORT = process.env.PORT || 3000;


//Server Running
//------------------------------------
app.listen(PORT, function () {
    console.log("App running on port " + PORT + ".");
});

