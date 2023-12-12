import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../../../../mui/src/Components/Assets/logo.png";

const Footer = () => {
    return (
        <footer className={"footer p-3 bg-dark fixed-end"}>
            <nav className="navbar navbar-dark ">
                <div className="container-fluid justify-content-around">
                    <div className={'links'}>
                        <Link className={'logo'}>
                            <img src={Logo} alt=""/>
                        </Link>
                        <Link to={'/'}  className='navbar-brand'>Home</Link>
                        <Link to={'/movie'} className='navbar-brand'>Movies</Link>
                    </div>
                    <div>
                        <p className='navbar-brand'>Phone Number <span >+996708504805</span></p>
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;