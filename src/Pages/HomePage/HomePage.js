import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../Components/Layout/Layout';
import MovieList from '../../Components/MovieList/MovieList';
import Carousel from '../../Components/Carousel/Carousel';
import Pagination from '../../Components/Pagination/Pagination';
import { Container} from "@mui/material";



const HomePage = () => {
    const { movies } = useSelector((state) => state);

    console.log('Movies:', movies);

    return (
        <Layout>
            <Carousel movies={movies} />
                <Container fixed sx={{paddingTop: '100px'}}>
                    <MovieList movies={movies} />
                </Container>
            <Pagination movies={movies} />
        </Layout>
    );
};

export default HomePage;
