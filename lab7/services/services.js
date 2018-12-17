import movies from './movies.json'
import { constants } from './constants'

function getAllMovies() {
    return movies.map(item => item.title)
}

function getSortedMovies(field, type) {
    return movies
        .slice()
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
        })
        .map(item => item.title)
}

function getMoviesByTitle(movie) {
    return movies
        .filter(item =>
            item.title
                .toString()
                .toLowerCase()
                .includes(movie)
        )
        .map(item => item.title)
}

function getMoviesPage(offset, limit) {
    return movies
        .slice(Number(offset), Number(offset) + Number(limit))
        .map(item => item.title)
}

function getMovieById(id) {
    return movies
        .filter(item => item.id === Number(id))
        .map(({ title, id }) => ({ title, id }))
}

export {
    getAllMovies,
    getSortedMovies,
    getMoviesByTitle,
    getMoviesPage,
    getMovieById
}