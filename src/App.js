import React from 'react';
import AppRouts from './AppRoutes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';



const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <AppRouts />
        </BrowserRouter>
    );
}

export default App;