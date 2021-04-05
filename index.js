var fs  = require('fs');
var http = require('http');
var events = require('events');
var express = require('express')
var db  = require("./db/name.js")

var app = express();

app.get('/', function(req,res){
    res.send('<h1>hello this is get method</h1>')
});

app.post('/post',async(req,res) =>{
    const results = await db.createName(req.body)
    res.status(201).json({id:result[0]})
})
app.listen(8000,function(err){
    console.log('server running on port')
})
