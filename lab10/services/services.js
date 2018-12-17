import { constants } from './constants'
import { Movie } from '../db/movie';

async function getAllMovies () {
  return await Movie.find({});
}

async function getSortedMovies (field, type) {
  return await Movie.find({}, null, {
    sort: {
      [field]: type === constants.sort.up ? "ASC" : "DESC",
    },
  });
}

async function getMoviesByTitle (movie) {
  return await Movie.find({
    title: new RegExp('^' + movie + '$', 'i'),
  });
}

async function getMoviesPage (skip, limit) {
  return await Movie.find({}, null, {skip, limit});
}

async function getMovieById (id) {
  return await Movie.findOne({id});
}

export {
  getAllMovies,
  getSortedMovies,
  getMoviesByTitle,
  getMoviesPage,
  getMovieById
}