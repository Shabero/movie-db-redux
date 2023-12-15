import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './style.css'
import {Box} from "@mui/material";

const Layout = ({children}) => {
    return (
        <Box className={'background-layout'}>
            <Header />
                <Box style={{minHeight: '100vh'}}>
                    {children}
                </Box>
            <Footer />
        </Box>
    );
};

export default Layout;