// styles
import style from '../styles/main.module.css';

// icons
import arrowLeft from '../icons/arrow-left.svg';
import pg from '../icons/pg.svg';
import socialImage from '../icons/social-image.svg';
import zarinCard from '../icons/zarincard.svg';
import payOut from '../icons/payout.svg';
import zarinPlus from '../icons/zarinplus.svg';

const Main = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.rowDiv}>
                <h3 className={style.rowTitle}>
                    درگاه پرداخت اینترنتی
                </h3>
                <h2 className={style.rowSubTitle}>
                    مهندسی شده برای رشد و فروش بیش‌تر   
                </h2>
                <p className={style.rowPrg}>
                    درگاه پرداخت زرین‌پال، با اتصالِ همزمان به درگاه‌های متنوع و معتبر بانکی(PSPها)،کاربران را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند و به واسطه‌ی قابلیت مسیردهی هوشمند، باعث افزایش درصد تراکنش‌های موفق می‌شود.
                </p>
                <div className={style.rowBtn}>
                    <button className={style.readMoreBtn}> 
                        <img src={arrowLeft}/>بيشتر بدانيد
                    </button>
                    <button className={style.goldenBtn}>ساخت درگاه پرداخت</button>          
                </div>
            </div>
            <div className={style.rowImage}>
                <img src={pg}/>
            </div>

            {/* ------------------------ */}

            <div className={style.rowImage}>
                <img src={socialImage}/>
            </div>
            <div className={style.rowDiv}>
                <h3 className={style.rowTitle}>
                    زرین‌لینک    
                </h3>
                <h2 className={style.rowSubTitle}>
                    پرداخت در شبکه‌های اجتماعی
                </h2>
                <p className={style.rowPrg}>
                    زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع، باعث افزایش فروش محصولات و خدمات، از طریق شبکه‌های اجتماعی یا وب‌سایت می‌شود
                </p>
                <div className={style.rowBtn}>
                    <button className={style.readMoreBtn}> 
                        <img src={arrowLeft}/>بيشتر بدانيد
                    </button>
                    <button className={style.goldenBtn}>ساخت زرين لينک</button> 
                </div>
            </div>

            {/* ------------------------ */}

            <div className={style.rowDiv}>
                <h3 className={style.rowTitle}>
                    زرین‌کارت
                </h3>
                <h2 className={style.rowSubTitle}>
                    طلایی‌ترین کارتِ بانکی
                </h2>
                <p className={style.rowPrg}>
                    زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب و متصل به یک حساب بانکی است که از تمام ویژگی‌‌ها و امکانات یک حساب بانکی تمام عیار برخوردار است. زرین‌‌کارت این امکان را برای کاربران خود فراهم می‌‌سازد تا از تعرفه‌‌ی کارمزد کم‌‌تر در روزهای عادی و کارمزد رایگان در سه‌‌شنبه‌‌های طلاییِ زرین‌‌پال بهره‌‌مند شوند
                </p>
                <div className={style.rowBtn}>
                    <button className={style.readMoreBtn}> 
                        <img src={arrowLeft}/>بيشتر بدانيد
                    </button>
                    <button className={style.goldenBtn}>درخواست زرين کارت</button> 
                </div>
            </div>
            <div className={style.rowImage}>
                <img src={zarinCard}/>
            </div>

            {/* ------------------------ */}

            <div className={style.rowImage}>
                <img src={payOut}/>
            </div>
            <div className={style.rowDiv}>
                <h3 className={style.rowTitle}>
                    تسهیم
                </h3>
                <h2 className={style.rowSubTitle}>
                    درگاه پرداخت اشتراکی
                </h2>
                <p className={style.rowPrg}>
                    تسهیم بهترین روش برای مدیریت مالی کسب‌ و کارهای شراکتی است که به واسطه‌ی آن، درآمد حاصل از فروش محصولات یا خدمات، در سهم‌های ثابت یا متغیر میان شرکای تجاری تقسیم شده و به صورت جداگانه به حساب هر شخص واریز می‌‌شود
                </p>
                <div className={style.rowBtn}>
                    <button className={style.readMoreBtn}> 
                        <img src={arrowLeft}/>بيشتر بدانيد
                    </button>
                    <button className={style.goldenBtn}>درخواست فعال سازي تسهیم</button> 
                </div>
            </div>

            {/* ------------------------ */}

            <div className={style.rowDiv}>
                <h3 className={style.rowTitle}>
                    زرین‌پلاس
                </h3>
                <h2 className={style.rowSubTitle}>
                    ابزار هوشمند سوددهی
                </h2>
                <p className={style.rowPrg}>
                    زرین‌پلاس محصولی از زرین‌پال، فرصتی فراهم کرده است تا کسب و کارها در هر اندازه و دسته‌بندی شغلی، با در دست داشتن ابزاری قدرتمند برای وفادارسازی مشتریان و افزایش فروش محصولات خود، بتوانند کسب و کار خود را به بهترین شکل توسعه و گسترش دهند و جایگاه برترین فروشگاه منطقه را به خود اختصاص دهند
                </p>
                <div className={style.rowBtn}>
                    <button className={style.readMoreBtn}> 
                        <img src={arrowLeft}/>بيشتر بدانيد
                    </button>
                    <button className={style.goldenBtn}>پيوستن به زرين پلاس</button> 
                </div>
            </div>
            <div className={style.rowImage}>
                <img src={zarinPlus}/>
            </div>
        </div>
    );
};

export default Main;