import { useRef } from 'react';
import { Link } from 'react-router-dom';

// styles
import style from '../styles/header.module.css';

// icons
import mobileImage from '../icons/home.svg';
import dropDown from '../icons/down-arrow-svgrepo-com.svg';

const Header = () => {
    const r = useRef();
    const arrowClickHandler = (e) => {
        r.current.scrollIntoView(true, 3000)
    }   

    return (   
        <header className={style.headerContainer}>
            <div className={style.headerLeft}>
                <img src={mobileImage}/>
            </div>
            <div className={style.headerRight}>
                <h2 className={style.headerTitle}>
                    بیش از ۱۲ سال 
                    <br/>
                    انتخاب مطمئنِ کسب و کارهای آنلاین
                </h2>
                <p className={style.headerPrg}>
                    .زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند
                </p>
                <div className={style.headerLinks}>
                    <Link to="/sign-in" className={style.linkSignIn}>ورود</Link>
                    <Link to="/sign-up" className={style.linkSignUp}>ثبت نام</Link>
                </div>
            </div>
            <div className={style.arrowBottom} ref={r} onClick={arrowClickHandler}>
                <img src={dropDown}/>
            </div>
        </header>
    );
};

export default Header;