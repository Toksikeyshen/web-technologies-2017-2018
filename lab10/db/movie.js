import Mongoose from 'mongoose';

const Movie = new Mongoose.Schema({
  id: Number,
  vote_count: Number,
  vote_average: Number,
  title: String,
  popularity: Number,
  poster_path: String,
  original_language: String,
  original_title: String,
  genre_ids: {
    type: [],
  },
  backdrop_path: String,
  adult: Boolean,
  overview: String,
  release_date: String,
});

exports.Movie = Mongoose.model('Movie', Movie);