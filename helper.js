import { client } from "./index.js";
import { ObjectId } from "mongodb";

async function getMovies(filter) {
  return await client.db("b251we").collection("movies").find(filter).toArray();
}

async function createMovies(data) {
  const collection = client.db("b251we").collection("movies");

  if (Array.isArray(data)) {
    return await collection.insertMany(data);
  }

  return await collection.insertOne(data);
}

async function getMoviesById(id) {
  const collection = client.db("b251we").collection("movies");

  // first check custom id
  const movie = await collection.findOne({ id });

  return movie
    ? movie
    : ObjectId.isValid(id)
      ? await collection.findOne({ _id: new ObjectId(id) })
      : null;
}

async function deleteMovieById(id) {
  const collection = client.db("b251we").collection("movies");
  //first check
  const movie = await collection.findOne({ id });

  return movie
    ? await collection.deleteOne({ id })
    : ObjectId.isValid(id)
      ? await collection.deleteOne({ _id: new ObjectId(id) })
      : null;
}
async function updateMovieById(id, updatedMovie) {
  const collection = client.db("b251we").collection("movies");

  const movie = await collection.findOne({ id });

  return movie
    ? await collection.updateOne({ id }, { $set: updatedMovie })
    : ObjectId.isValid(id)
      ? await collection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updatedMovie },
        )
      : null;
}

export {
  getMovies,
  createMovies,
  getMoviesById,
  deleteMovieById,
  updateMovieById,
};
