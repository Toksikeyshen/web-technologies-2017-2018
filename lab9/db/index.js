import Sequelize from 'sequelize';
import {config}from '../config';

const { DB_NAME, DB_PORT, DB_HOST, DB_PASS, DB_USER } = config;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres',
  operatorsAliases: false,
  port: +DB_PORT,
  logging: false,
  define: {
    timestamps: false,
  }
});

const Movie = require('./movie')(sequelize);
const GenreId = require('./genre-id')(sequelize);

GenreId.movie = GenreId.belongsTo(Movie);
Movie.genre_ids = Movie.hasMany(GenreId);

sequelize.sync();

module.exports = { sequelize, Movie, GenreId };