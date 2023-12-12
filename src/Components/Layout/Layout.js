import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './style.css'

const Layout = ({children}) => {
    return (
        <div className={'background-layout'}>
            <Header />
            <div style={{minHeight: '100vh'}}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;