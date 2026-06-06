import express from "express";
const router = express.Router();

import {
  getMovies,
  createMovies,
  getMoviesById,
  deleteMovieById,
} from "./helper.js";

// route 2 //-> All movies page
router.get("/", async (req, res) => {
  const filter = {};
  if (req.query.language) {
    filter.language = req.query.language;
  }

  if (req.query.rating) {
    filter.rating = Number(req.query.rating);
  }

  console.log("filter:", filter);

  const movie = await getMovies(filter);
  // console.log(movie)

  res.send(movie);
});

// route 3 //-> Add movies page✅
router.post("/", express.json(), async (req, res) => {
  // using middle ware individually

  const data = req.body;
  console.log("Incoming movies", data);

  const movie = await createMovies(data);
  console.log(movie);

  res.send(movie);
});

// route 4 //-> for trailer id page✅
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const movie = await getMoviesById(id);
  console.log(movie);

  movie
    ? res.send(movie)
    : res.status(404).send({ msg: "Movie not found macha 😝😝" });
});

// route 5 //-> for delete by id page✅
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  // db.movies.deleteOne()
  const movie = await deleteMovieById(id);
  console.log(movie);

  movie
    ? res.send(movie)
    : res.status(404).send({ msg: "Movie not found macha 😝😝" });
});

export const moviesRouter = router;
