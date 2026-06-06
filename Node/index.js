
// express code - frame work on node ( helps building server API end points easily)
// alternatives- hapi,  sails
//? -> is a query parameter
// node mon is only used in development not in production so we instal as dev dependencies
// npm install --save-dev nodemon
// "start": "node index.js" -> add in pakage json to short cut to run the app/ ease access
// "dev": "nodemon index.js",
// npm i mongodb - install mongo db


// const express = require ("express");
// const { MongoClient } = require('mongodb'); // common js

import express from "express"; //"type": "module",
import {MongoClient} from "mongodb"; //"type": "module",
import dotenv from 'dotenv';

dotenv.config(); // getting all env keys

// console.log(process.env); // prints all object in the console

const app = express();

// app.use -> intercept every req
// app.use(express.json()); // every request in the body is parsed as json
// const MONGO_URL = 'mongodb://localhost:27017'; //'mongodb://localhost:27017';
// mongodb+srv://yash:<db_password>@cluster0.oddm5lf.mongodb.net/?appName=Cluster0

const MONGO_URL = process.env.MONGO_URL; 
// Hidden the url from git
// mongo cluster url placed to connect Atlas




async function createConnection (){
  const client = new MongoClient(MONGO_URL);
  await client.connect();// promise returns
  console.log("MongoDB connected");
  return client;
}

const client = await createConnection(); // allowed only in type module 

// create => / movies 

// route 1
const PORT = 9000;
app.get('/', (req, res) => {
    res.send( "Hello Yash, Welcome to Node.js 🌎❗❗❗😆");
})

// route 2
app.get('/movies', async (req, res) => {

    // const filter = req.query;
    // if (filter.rating){
    //   filter.rating = parseInt(filter.rating);
    //   console.log( filter.rating);
    // }
  const filter = {};

  if (req.query.language) {
    filter.language = req.query.language;
  }

  if (req.query.rating) {
    filter.rating =  Number(req.query.rating) ;
   
  }

  console.log("filter:", filter);

    const movie = await client.db("b251we").collection("movies").find(filter).toArray();
    // console.log(movie)

    res.send( movie);    
})

// route 3
app.post('/movies',express.json(), async (req, res) => { // using middle ware individually

  const data = req.body;
  console.log("Incoming movies",data);


  
    const movie = await client.db("b251we").collection("movies").insertMany(data);
    console.log(movie);

    res.send( );
    
})

// route 4 
app.get('/movies/:id', async (req, res) => {
    const {id} = req.params; 

    const movie = await client.db("b251we").collection("movies").findOne({id:id});
    console.log(movie);  
    
    movie ? res.send( movie) : res.status(404).send({ msg: "Movie not found macha 😝😝"});
    
})
app.listen ( PORT, () => console.log("The server is started", PORT));

//Task

// movies - allmovies ✅
// ? language - filtered by language ✅
// ? rating - filtered by rating ✅
// ?language & rating - filtered by language & then by rating✅


// C - create - POST
// R - Read   - GET
// U - update - PUT
// D - Delete - DELETE

// session 1:46 - intall mongodb




// cloud -> its renting pc -> mongo Atlas -> install atlas online and gives access -> data online -> access from node app 

