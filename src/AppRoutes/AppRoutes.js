import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import MoviePage from '../Pages/MoviePage/MoviePage';
// import SearchPage from "../Pages/SearchPage/SearchPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/movie/:id' element={<MoviePage/>} />
            {/*<Route path='/search' element={<SearchPage/>} />*/}
        </Routes>
    );
}

export default AppRoutes;