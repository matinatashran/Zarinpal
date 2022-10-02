import React, { useState } from 'react';
import styled from 'styled-components';


// style
import style from './navbar.module.css';

// images
import logo from '../images/logo-white.svg';
import dropDown from '../images/down-arrow-svgrepo-com.svg';
import burgerMenuImg from '../images/hamburger.svg';
import arrowLeft from '../images/arrow-left.svg';
import cross from '../images/cross.svg';
import { Link } from 'react-router-dom';

const MobileMenuDiv = styled.div`
    width: 100%;
    background-color: #ffffff;
    text-align: right;
    line-height: 33px;
    position: absolute;
    top: ${(props) => props.isOpen ? "0" : "-12%"};
    z-index: 109;
    transition: 0.6s;
    font-size: 0.85rem;
`

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={style.navbarContainer}>
                <div className={style.logo}>
                    <Link to="/home"> <img src={logo} alt='logo'/> </Link>
                </div>
                <div className={style.leftNavbar}>
                    <nav>
                        <ul className={style.navbarMenu}>
                            <li className={style.moreMenu}>
                                <img src={dropDown} className={style.dropDownBtn}/>
                                بیشتر
                                <ul className={style.moreSubMenu}>
                                    <li>وبلاگ</li>
                                    <li>دریافت شماره شبا</li>
                                    <li>سوالات متداول</li>
                                    <li>اپلیکیشن</li>
                                    <li>زرین بین</li>
                                </ul>
                            </li>
                            <li>تماس با ما</li>
                            <li>توسعه دهندگان</li>
                            <li>تعرفه ها</li>
                            <li className={style.moreMenu}>
                                <img src={dropDown} className={style.dropDownBtn}/>
                                محصولات
                                <ul className={style.moreSubMenu + ' ' + style.products}>
                                    <li>
                                        <Link to="/home">
                                            <span className={style.menuTitle}>درگاه پرداخت</span>
                                            <span className={style.menuSubTitle}>مهندسی شده برای فروش بیش‌تر</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/home">
                                            <span className={style.menuTitle}>زرین‌لینک</span>
                                            <span className={style.menuSubTitle}>لینک پرداخت در شبکه‌های اجتماعی</span>
                                        </Link>
                                    </li>                             
                                    <li>
                                        <Link to="/home">
                                            <span className={style.menuTitle}>زرین‌پلاس</span>
                                            <span className={style.menuSubTitle}>ابزار هوشمند سوددهی</span>
                                        </Link>
                                    </li>                                    
                                    <li>
                                        <Link to="/home">
                                            <span className={style.menuTitle}>زرین‌کارت</span>
                                            <span className={style.menuSubTitle}>طلایی‌ترین کارتِ بانکی</span>
                                        </Link>
                                    </li>                                    
                                    <li>
                                        <Link to="/home">
                                            <span className={style.menuTitle}>تسهیم</span>
                                            <span className={style.menuSubTitle}>درگاه پرداخت اشتراکی</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className={style.zarinLink}>
                        <Link to="/sign-in">زرین پال من</Link>
                    </div>
                </div>
                <div className={style.burgerMenu} onClick={() => setIsOpen(!isOpen)}>
                    <img src={burgerMenuImg}/>
                </div>
            </div>
            {/* <mobile menu> */}
                <MobileMenuDiv isOpen={isOpen}>
                    <img src={cross} className={style.cross} onClick={() => setIsOpen(!isOpen)}/>
                    <ul className={style.menubar}>
                        <li>تعرفه ها</li>
                        <li>اپلیکیشن</li>
                        <div className={style.horizontalLine}></div>
                        <li>سوالات متداول</li>
                        <li>محصولات</li>
                        <li>تماس با ما</li>
                    </ul>
                    <div className={style.zarinpalLink}>
                        <Link to="/sign-in"> <img src={arrowLeft} className={style.arrowLeft}/> زرین پال من</Link>
                    </div>
                </MobileMenuDiv>

            {/* </mobile menu> */}
        </>
    );
};

export default Navbar;