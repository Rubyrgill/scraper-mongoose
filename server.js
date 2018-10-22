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



console.log("Hello, Connected to server")