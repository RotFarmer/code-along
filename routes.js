"use strict";
const express = require("express");
const routes = express.Router();

const movies = [
    {id:1,title:"2001: a space odyssey", year:1968,animated:false},
    {id:2,title:"the gpdfather", year:1972,animated:false},
    {id:3,title:"the lion king", year:1994,animated:true},
    {id:4,title:"black panther", year:2018,animated:false},
];
let nextId=5
routes.get("/movies",(req,res)=>{
    res.json(movies);
})

routes.get("/novies/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const movie = movie.find(movie=>movie.id===id)
    if(movie){
        res.json(movie)
    }else{
        res.status(404)
        res.send(`no movie with id ${id} exists.`)
    }
})

routes.post("/movies",(req,res)=>{
    const movie = req.body;
    movie.id=nextId++
    movies.push(movie)
    res.status(201)
    res.json(movie)
})











// routes for use in server.js
module.exports = routes;
