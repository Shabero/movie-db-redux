import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import axios from "axios";
import {API_KEY, BASE_URL} from "../../config/config";
import Logo from '../../../../mui/src/Components/Assets/logo.png';



const Header = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (search.length > 3) {
                axios(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${search}&page=1&include_adult=false&language=en-EN`)
                    .then(({data}) => console.log(data))
            }
        }, 3000)

        return () => clearTimeout(delayDebounceFn)
    }, [search]);

    return (
        <header className={"header p-3   fixed-top "}>
            <nav className="navbar navbar-dark ">
                <div className="container-fluid justify-content-around">
                    <div className={'links'}>
                        <Link className={'logo'}>
                            <img src={Logo} alt=""/>
                        </Link>
                        <Link to={'/'}  className='navbar-brand'>Home</Link>
                        <Link to={'/movie'} className='navbar-brand'>Movies</Link>
                    </div>
                    <div className={'search-link  d-flex'}>
                        <input type='text' onChange={handleSearch} className='search-input navbar-brand' placeholder='Search...'/>
                        <button className={'search-button'} style={{ fill: 'rgba(248, 248, 248, 0.9)', transform: '', msFilter: '' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;