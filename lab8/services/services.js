import movies from './movies.json'
import { constants } from './constants'

function getAllMovies() {
    return movies;
}

function getSortedMovies(field, type) {
    return movies
        .sort((a, b) => {
            if (type === constants.sort.up) {
                return String(a[field]).localeCompare(
                    String(b[field])
                )
            } else if (type === constants.sort.down) {
                return String(b[field]).localeCompare(
                    String(a[field])
                )
            }
        });
}

function getMoviesByTitle(movie) {
    return movies
        .filter(item =>
            item.title
                .toString()
                .toLowerCase()
                .includes(movie)
        );
}

function getMoviesPage(offset, limit) {
    return movies
        .slice(Number(offset), Number(offset) + Number(limit));
}

function getMovieById(id) {
    return movies
        .find(item => item.id === Number(id));
}

export {
    getAllMovies,
    getSortedMovies,
    getMoviesByTitle,
    getMoviesPage,
    getMovieById
}