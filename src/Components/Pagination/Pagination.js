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

    const handlePaginationClick = (newPage) => {
        setCurrentPage(newPage);
    };

    console.log('Movies:', movies);

    return (
        <>
            <PaginationComponent currentPage={currentPage} onChangePage={handleChangePage} onClick={handlePaginationClick} />
        </>
    );
};

const PaginationComponent = ({ currentPage, onChangePage, onClick }) => {
    const newArr = new Array(10).fill(0);

    return (
        <div className={'pagination-buttons d-flex p-2 pb-5 justify-content-center'}>
            <button className={'p-2 btn btn-outline-danger'} onClick={() => onClick(currentPage - 1)}>Prev</button>
            {newArr.map((item, index) => (
                <button className={`btn ${index + 1 === currentPage ? 'btn-info' : 'btn-outline-info'}`} onClick={() => onClick(index + 1)} key={index}>
                    {index + 1}
                </button>
            ))}
            <button className={'p-2 btn btn-outline-danger'} onClick={() => onClick(currentPage + 1)}>Next</button>
        </div>
    );
};

export default Pagination;
