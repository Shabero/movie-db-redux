import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../Components/Layout/Layout';
import MovieList from '../../Components/MovieList/MovieList';
import Carousel from '../../Components/Carousel/Carousel';
import Pagination from '../../Components/Pagination/Pagination';

const HomePage = () => {
    const { movies } = useSelector((state) => state);

    console.log('Movies:', movies);

    return (
        <Layout>
            <Carousel movies={movies} />
            <div className={'container mt-5 pt-5'}>
                <MovieList movies={movies} />
            </div>
            <Pagination movies={movies} />
        </Layout>
    );
};

export default HomePage;
