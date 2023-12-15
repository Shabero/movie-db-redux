import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../mui/src/Components/Assets/logo.png';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position="static" sx={{
            backgroundColor: 'rgba(44, 42, 42, 0.4)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(8px)',
        }}>
            <Toolbar>
                <Container sx={{ padding: '20px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ paddingRight: '20px' }}>
                                <Link href="/">
                                    <img src={Logo} alt="Logo" style={{ width: '50px' }} />
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '20px' }}>
                                <Link to={'/'} sx={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
                                    <Typography variant='h6'>
                                        Home
                                    </Typography>
                                </Link>
                                <Link to={'/movie'} sx={{ textDecoration: 'none', color: 'white' }}>
                                    <Typography variant='h6'>
                                        Movies
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant='subtitle1' sx={{ color: 'white' }}>
                                Phone Number <span>+996708504805</span>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
