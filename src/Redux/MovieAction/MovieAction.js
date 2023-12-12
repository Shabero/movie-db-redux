import {GET_MOVIE_BY_ID, GET_MOVIES} from "../type";
import axios from "axios";

// const BASE_URL = 'https://api.themoviedb.org/3/'
// const URL = `https://api.themoviedb.org/3/discover/movie?page=1&api_key=3f2c259e0cdfb7b466c9f5db74e69990&language=ru-RU`
// const API_KEY =  '3f2c259e0cdfb7b466c9f5db74e69990'

export const getMovies = (page) => {
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/discover/movie?page=1&api_key=2336723e3b751d0f27f68be87a1da76c&language=ru-RU&page=${page}`)
            .then(({data}) => {
                dispatch({type: GET_MOVIES, payload: data})
            })
    }
}

// export const getMovieById = (id) => {
//     return dispatch => {
//         axios(`https://api.themoviedb.org/3/movie/${id}?api_key=2336723e3b751d0f27f68be87a1da76c&language=ru-RU`)
//             .then(({data}) => {
//                 dispatch({type: GET_MOVIE_BY_ID, payload: data})
//             })
//     }
// }
//
// export const clearMovie = () => {
//     return dispatch => {
//         dispatch({type: GET_MOVIE_BY_ID, payload: {}})
//     }
// }