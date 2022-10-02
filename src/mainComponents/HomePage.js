import React from 'react';
import { useTitle } from '../hooks/hooks';

// style
import "./homePage.css";

// components
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Main from '../components/Main';
import SiteProperty from '../components/SiteProperty';
import Footer from '../components/Footer';


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