import React from 'react';
import {IMAGE_URL} from '../../config/config'
import {useNavigate} from "react-router-dom";
import './style.css'
import IMDblogo from "../Assets/IMDb-vote.png";
import { Grid, Typography} from "@mui/material";

const MovieList = ({movies}) => {
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(`/movie/${id}`)
    }

    return (
        <Grid container spacing={4} >
            {movies.map((movie) => (
                <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <div className={'movie-box'} onClick={() => handleNavigate(movie.id)}>
                        <img src={`${IMAGE_URL}${movie.poster_path}`} className={'movie-img'} alt="" />
                        <Typography variant="h6">{movie.title}</Typography>
                        <div className={'d-flex logo-imdb'}>
                            <img src={IMDblogo} style={{ width: '30px', height: '30px' }} alt="IMDb logo" />
                            <Typography variant="body1" className={'fs-5 d-flex'}>
                                {movie.vote_average}
                            </Typography>
                        </div>
                        <Typography variant="body2">{movie.release_date}</Typography>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default MovieList;