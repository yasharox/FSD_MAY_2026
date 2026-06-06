
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
const app = express();

const movies = [ 
    {
      id:'100',
      name: "The Avengers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNMKEWfouZ-LL6Un6IRmBbgHsno01MQsW0Q&s",
      rating:8.4,
      summary:"S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
      trailer:"https://www.youtube.com/embed/eOrNdBpGMv8",
      language:"English"
      
    },
    {
      id:'101',
      name: "Avatar: Fire and Ash",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/95/Avatar_Fire_and_Ash_poster.jpeg",
      rating:7.4,
      summary:"The conflict on Pandora escalates as Jake and Neytiri's family encounter a new, aggressive Na'vi tribe.",
      trailer:"https://www.youtube.com/embed/nb_fFj_0rq8",
      language:"English"
      
    },
      {
      id:'102',
      name: "Jack Reacher",
      image:
        "https://m.media-amazon.com/images/I/91apNSEB2zL._AC_UF1000,1000_QL80_.jpg",
      rating:7.0,
      summary:"When a former US Army sniper, James Barr, is accused of killing five people, Jack Reacher, a former Military Police officer, takes it upon himself to investigate the case.",
      trailer:"https://www.youtube.com/embed/GSycMV-_Csw",
      language:"English"
      
    },

    {
      id:'103',
      name: "Gravity",
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg",
      rating:7.7,
      summary:"Dr Ryan Stone, an engineer on her first time on a space mission, and Matt Kowalski, an astronaut on his final expedition, have to survive in space after they are hit by debris while spacewalking.",
      trailer:"https://www.youtube.com/embed/OiTiKOy59o4",
      language:"English"
    },
    {
      id:'104',
      name: "The Expendables",
      image:
        "https://m.media-amazon.com/images/I/51y42RNdW7L._AC_UF1000,1000_QL80_.jpg",
      rating:7.7,
      summary:"The Expendables is an American ensemble action thriller franchise conceived by David Callaham, spanning a film series, the first three movies were cowritten by Sylvester Stallone, and additional media",
      trailer:"https://www.youtube.com/embed/4xD0junWlFc",
      language:"Spanish"
    },
    
   
   
  ];

const MONGO_URL = 'mongodb://localhost:27017'; //'mongodb://localhost:27017';

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
    console.log(req.query);
    const {language, rating} = req.query;    // extract 
    // let filterMovies  = movies; // assign the movies

    // db.movies.find({language:"english"}) 

    // if ( language){ // if the language in qurey
    //    filterMovies = filterMovies.filter ( (mv) => mv.language === language);
    //   } 

    //  if (rating ){ // if the rating in qurey           
    //   filterMovies = filterMovies.filter( (mv) => (mv.rating) === +(rating) ); // + , parseInt, Number     
    // }  
    // console.log(movie)  

    const filter = req.query;
    if (filter.rating){
      filter.rating = +(filter.rating);
      console.log( filter.rating);
    }

    const movie = await client.db("b251we")
                              .collection("movies")
                              // .find({language:language, rating : +rating})// returns cursor-> pagination
                              .find(filter)
                              .toArray();
    console.log(movie)

    res.send( movie);
    
})

// route 3
app.post('/movies', async (req, res) => {
    console.log(req.query);
    const {language, rating} = req.query;    // extract 
  

    const filter = req.query;
    if (filter.rating){
      filter.rating = +(filter.rating);
      console.log( filter.rating);
    }

    const movie = await client.db("b251we")
                              .collection("movies")
                              // .find({language:language, rating : +rating})// returns cursor-> pagination
                              .find(filter)
                              .toArray();
    console.log(movie)

    res.send( movie);
    
})

// route 4 
app.get('/movies/:id', async (req, res) => {
    const {id} = req.params; 

    // command to get movie by id in mongodb
    // db.movies.find( {"id":"105"})
    // console.log(id);     
    // const result = movie.find( mv => mv.id === id);

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

// session 2:30 - intall mongodb


