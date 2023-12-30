import {GET_MOVIE_BY_ID, GET_MOVIE_TRAILERS, GET_MOVIES} from "../type";
import axios from "axios";
import {API_KEY, BASE_URL} from "../../config/config";

// const BASE_URL = 'https://api.themoviedb.org/3/'
// const URL = `https://api.themoviedb.org/3/discover/movie?page=1&api_key=3f2c259e0cdfb7b466c9f5db74e69990&language=ru-RU`
// const API_KEY =  '3f2c259e0cdfb7b466c9f5db74e69990'

export const getMovies = (page) => {
    return (dispatch) => {
        axios(`${BASE_URL}/discover/movie?page=1&api_key=${API_KEY}&page=${page}`)
            .then(({data}) => {
                dispatch({type: GET_MOVIES, payload: data})
            })
    }
}

export const getMovieById = (id) => {
    return dispatch => {
        axios(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
            .then(({data}) => {
                dispatch({type: GET_MOVIE_BY_ID, payload: data})
            })
    }
}

export const clearMovie = () => {
    return dispatch => {
        dispatch({type: GET_MOVIE_BY_ID, payload: {}})
    }
}

export const getMovieTrailers = (id) => {
    return dispatch => {
        axios(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
           .then(({data}) => {
                dispatch({type: GET_MOVIE_TRAILERS, payload: data})
            })
    }
}