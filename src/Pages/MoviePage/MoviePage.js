import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getMovieById, clearMovie, getMovieTrailers} from '../../Redux/MovieAction/MovieAction'; // Подставьте путь к вашим действиям
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FilmCard from '../../Components/FilmCard/FilmCard';
import { BACKDROP_URL } from '../../config/config';
import './style.css';

const useStyles = makeStyles((theme) => ({
    moviePage: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - 64px)', // Вы можете настроить высоту фона
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    trailersSection: {
        padding: theme.spacing(5),
        textAlign: 'center',
    },
    trailerBox: {
        paddingTop: theme.spacing(4),
    },
    iframe: {
        borderRadius: 4,
        width: '100%',
        height: 315,
    },
}));

const MoviePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movie, trailers} = useSelector((state) => state.movie); // Замените на ваш state и редьюсер

    useEffect(() => {
        dispatch(getMovieById(id));
        dispatch(getMovieTrailers(id));

        return () => {
            dispatch(clearMovie());
        };
    }, [dispatch, id]);

    const styles = useStyles();

    return (
        <>
            <Container disableGutters>
                <Box className={styles.moviePage} style={{ backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})` }}>
                    <FilmCard movie={movie} />
                </Box>
                <Container className={styles.trailersSection}>
                    <Typography variant="h3">Trailers</Typography>
                    <Grid container spacing={3}>
                        {trailers.slice(0, 3).map((trailer) => (
                            <Grid key={trailer.id} item xs={12} md={4}>
                                <Paper className={styles.trailerBox}>
                                    <iframe
                                        className={styles.iframe}
                                        src={`https://www.youtube.com/embed/${trailer.key}`}
                                        frameBorder="0"
                                        width="100%"
                                        height={315}
                                        allowFullScreen
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                    ></iframe>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
        </>
    );
};

export default MoviePage;
