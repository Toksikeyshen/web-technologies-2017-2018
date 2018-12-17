import Sequelize from 'sequelize'

module.exports = function (sequelize) {
  return sequelize.define('genre_id', {
    value: Sequelize.STRING
  });
}