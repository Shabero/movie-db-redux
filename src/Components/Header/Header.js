import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import axios from "axios";
import {API_KEY, BASE_URL} from "../../config/config";
import Logo from '../Assets/logo.png';
import {AppBar, Box, Container, IconButton, InputBase, Toolbar, Typography} from "@mui/material";



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
        <AppBar position="fixed" sx={{
            backgroundColor: 'rgba(44, 42, 42, 0.4)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(8px)',
        }}>
            <Toolbar>
                <Container sx={{padding: '20px'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{paddingRight:'20px'}}>
                                <Link href="/" >
                                    <img src={Logo} alt="Logo" style={{ width: '50px'}} />
                                </Link>
                            </Box>
                            <Box sx={{display: 'flex', gap: '20px'}}>
                                <Link to={'/'} sx={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
                                    <Typography variant='h6'>
                                        Home
                                    </Typography>
                                </Link>
                                {/*<Link to={'/movie'} sx={{ textDecoration: 'none', color: 'white' }}>*/}
                                {/*    <Typography variant='h6'>*/}
                                {/*        Movies*/}
                                {/*    </Typography>*/}
                                {/*</Link>*/}
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <InputBase
                                type='text'
                                onChange={handleSearch}
                                placeholder='Search...'
                                sx={{
                                    width: '100%',
                                    height: '40px',
                                    borderRadius: '20px',
                                    border: 'none',
                                    outline: 'none',
                                    padding: '5px 20px',
                                    fontSize: '1rem',
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    marginRight: '10px',
                                }}
                            />
                            <IconButton style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                                </svg>
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;