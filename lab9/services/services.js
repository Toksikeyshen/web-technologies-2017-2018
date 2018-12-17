import Sequelize from 'sequelize'
import { Movie, GenreId } from '../db'
import { constants } from './constants'

async function getAllMovies () {
  const movies = await Movie.findAll({include: [GenreId]})
  const mv = movies.map(movie => movie.toJSON())

  return beautifyIds(mv)
}

function beautifyIds (movies) {
  const genre_ids = movies.genre_ids.map(id => id.value)

  return Object.assign(movies, {genre_ids})
}

async function getSortedMovies (field, type) {
  const movies = await Movie.findAll({
    sort: [field, type === constants.sort.up ? 'ASC' : 'DESC'],
    include: [GenreId]
  })

  const mv = movies.map(movie => movie.toJSON())

  return beautifyIds(mv)
}

async function getMoviesByTitle (movie) {
  const mv = await Movie.findOne({
    where: {
      title: {
        [Sequelize.Op.iLike]: '%' + movie + '%'
      }
    },
    include: [GenreId]
  })

  return beautifyIds(mv.toJSON())
}

async function getMoviesPage (offset, limit) {
  const movies = await Movie.findAll({offset, limit, include: [GenreId]})
  const mv = movies.map(movie => movie.toJSON())

  return beautifyIds(mv)
}

async function getMovieById (id) {
  const movies = await Movie.findOne({
    where: {
      id
    },
    include: [GenreId]
  })
  const mv = movies.map(movie => movie.toJSON())

  return beautifyIds(mv);
}

export {
  getAllMovies,
  getSortedMovies,
  getMoviesByTitle,
  getMoviesPage,
  getMovieById
}