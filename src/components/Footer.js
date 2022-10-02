import React from 'react';

// style
import style from './footer.module.css';

// images
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import telegram from '../images/telegram.svg';
import linkedin from '../images/linkedin.svg';
import aparat from '../images/aparat.svg';
import arrowLeft from '../images/arrow-left.svg';


const Footer = () => {
    return (
        <footer className={style.footerContainer}>
            <div className={style.startDiv}>
                <span className={style.startDivTitle}>
                    به خانواده‌ی یک میلیونی زرین‌پال بپیوندید    
                </span>
                <span className={style.startDivSubTitle}>
                    یک ماه رایگان، هدیه‌ی عضویت زرین‌پال به شما
                </span>
                <a href='#' className={style.startDivLink}>شروع کنید</a>
            </div>
            
            <div className={style.supportBox}>
                <div className={style.boxLeft}>
                    <a href='#' className={style.supportLink}> 
                        <img src={arrowLeft}/> درخواست پشتیبانی
                    </a>
                </div>
                <div className={style.boxRight}>
                    <div className={style.infoText}> 
                        <div className={style.phone}>
                            <span className={style.phoneNumber}>۰۲۱-۴۱۲۳۹</span> : شماره تماس 
                        </div>
                        <span className={style.pipe}>|</span>
                        <div className={style.support}>
                            پشتیبانی ۲۴ ساعته، ۷ روز هفته   
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footerLinks}>
                <div className={style.socialLinks}>
                    <div className={style.socialTitle}>: زرین‌پال در شبکه‌های اجتماعی</div>
                    <div className={style.socialNetworks}>
                        <ul>
                            <li> 
                                <a href='#' className={style.socialLink}> <img src={aparat}/> </a> 
                            </li>
                            <li> 
                                <a href='#' className={style.socialLink}> <img src={linkedin}/> </a> 
                            </li>
                            <li> 
                                <a href='#' className={style.socialLink}> <img src={telegram}/> </a> 
                            </li>
                            <li> 
                                <a href='#' className={style.socialLink}> <img src={twitter}/> </a> 
                            </li>
                            <li> 
                                <a href='#' className={style.socialLink}> <img src={instagram}/> </a> 
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={style.siteLinks}>
                    <div className={style.category}>
                        <div className={style.categoryTitle}>منابع</div>
                        <ul>
                            <li> <a href='#'>دریافت شماره شبا</a> </li>
                            <li> <a href='#'>زرین‌بین</a> </li>
                            <li> <a href='#'>توسعه‌دهندگان</a> </li>
                            <li> <a href='#'>وبلاگ</a> </li>
                        </ul>
                    </div>
                    
                    {/* ----------------- */}

                    <div className={style.category}>
                        <div className={style.categoryTitle}>ارتباط‌ بیشتر</div>
                        <ul>
                            <li> <a href='#'>تماس با ما</a> </li>
                            <li> <a href='#'>قوانین و مقررات</a> </li>
                            <li> <a href='#'>حریم ‌خصوصی</a> </li>
                        </ul>
                    </div>
                    
                    {/* ----------------- */}

                    <div className={style.category}>
                        <div className={style.categoryTitle}>آشنایی با زرین‌پال</div>
                        <ul>
                            <li> <a href='#'>تعرفه‌ها</a> </li>
                            <li> <a href='#'>درباره ما</a> </li>
                            <li> <a href='#'>سوالات متداول</a> </li>
                            <li> <a href='#'>همکاری در فروش</a> </li>
                        </ul>
                    </div>
                    
                    {/* ----------------- */}

                    <div className={style.category}>
                        <div className={style.categoryTitle}>محصولات</div>
                        <ul>
                            <li> <a href='#'>زرین‌لینک</a> </li>
                            <li> <a href='#'>درگاه پرداخت اینترنتی</a> </li>
                            <li> <a href='#'>زرین‌کارت</a> </li>
                            <li> <a href='#'>تسهیم</a> </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;