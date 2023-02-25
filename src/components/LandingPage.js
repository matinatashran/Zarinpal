import React from 'react';
import { useTitle } from '../hooks/hooks';

// style
import "../styles/homePage.css";

// components
import Navbar from './Navbar';
import Header from './Header';
import Main from './Main';
import SiteProperty from './SiteProperty';
import Footer from './Footer';


const HomePage = () =>{
    
    useTitle("ارائه دهنده خدمات درگاه پرداخت اینترنتی | زرین پال");

    document.body.style.backgroundColor = "#fff";

    return (
        <div className="home">
            <Navbar/>
            <Header/>
            <Main/>
            <SiteProperty/>
            <Footer/>
        </div>
    );
};

export default HomePage;