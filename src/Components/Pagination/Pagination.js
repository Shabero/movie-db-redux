import './style.css'
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import queryString from 'query-string';
import { getMovies } from '../../Redux/MovieAction/MovieAction';


const Pagination = ({ movies }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = queryString.parse(location.search);
    const currentPageFromQuery = parseInt(queryParams.page, 10) || 1;

    const [currentPage, setCurrentPage] = useState(currentPageFromQuery);

    useEffect(() => {
        dispatch(getMovies(currentPage));
    }, [dispatch, currentPage]);

    const handleChangePage = (newPage) => {
        setCurrentPage(newPage);
        navigate(`?page=${newPage}`);
    };

    console.log('Movies:', movies);

    return (
        <Pagination
            currentPage={currentPage}
            onChangePage={handleChangePage}
        />
    );
};

export default Pagination;
