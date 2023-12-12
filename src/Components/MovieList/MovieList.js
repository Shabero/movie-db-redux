import React from 'react';
import {IMAGE_URL} from '../../config/config'
import {useNavigate} from "react-router-dom";
import './style.css'
import IMDblogo from "../../../../mui/src/Components/Assets/IMDb-vote.png";

const MovieList = ({movies}) => {
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(`/movie/${id}`)
    }

    return (
        <div className={'row'}>
            {
                movies.map(movie =>
                    <div className={'col-xl-3 col-lg-4 col-md-6 col-sm-5'} >
                        <div
                            className={'movie-box'}
                            onClick={() => handleNavigate(movie.id)}
                        >
                            <img src={`${IMAGE_URL}${movie.poster_path}`} className={'movie-img '} alt=""/>
                            <h3 className={'fs-4 pt-3'}>{movie.title}</h3>
                            <div className={'d-flex logo-imdb'}>
                                <img src={IMDblogo} style={{width: '30px', height: '30px'}} alt=""/>
                                <div>
                                    <p className={'fs-5 d-flex'}>{movie.vote_average}</p>
                                </div>

                            </div>
                            <p>{movie.release_date}</p>

                        </div>
                    </div>
                )

            }
        </div>
    );
};

export default MovieList;