// styles
import style from '../styles/siteProperty.module.css';

// icons
import splite from '../icons/splite.svg';
import verified from '../icons/verifiedIcon.svg';
import support from '../icons/support.svg';

const SiteProperty = () => {
    return (
        <>
            <div className={style.sitePropertyContainer}>
                <div className={style.siteProps}>
                    <div className={style.prop}>
                        <div className={style.propTitle}>
                            <span className={style.propSubTitle}>مسیردهی هوشمند</span>
                            <span className={style.propIcon}>
                                <img src={splite}/>
                            </span>
                        </div>
                        <p className={style.propPrg}>
                            استانداردهای متفاوت زرین‌پال در بازه‌های زمانی مختلف، باعث می‌شود کاربران به بهترین درگاه پرداخت با بالاترین میزان تراکنش‌های موفق هدایت شوند
                        </p>
                    </div>

                {/* ------------------ */}

                    <div className={style.prop}>
                        <div className={style.propTitle}>
                            <span className={style.propSubTitle}>ضمانتِ پرداخت</span>
                            <span className={style.propIcon}>
                                <img src={verified}/>
                            </span>
                        </div>
                        <p className={style.propPrg}>
                            درگاه پرداخت زرین‌پال، تجربه‌ی پرداخت اینترنتی آسان، سریع و امن را به مشتریان کسب و کارهای آنلاین هدیه می‌دهد
                        </p>
                    </div>

                {/* ------------------ */}

                    <div className={style.prop}>
                        <div className={style.propTitle}>
                            <span className={style.propSubTitle}>امنیتِ پرداخت</span>
                            <span className={style.propIcon}>
                                <img src={support}/>
                            </span>
                        </div>
                        <p className={style.propPrg}>
                            درگاه امن زرین‌پال، ضمانتی برای امنیت اطلاعات بانکی افراد، هنگام پرداخت‌‌های اینترنتی آن‌هاست
                        </p>
                    </div>

                {/* ------------------ */}

                    <div className={style.prop}>
                        <div className={style.propTitle}>
                            <span className={style.propSubTitle}>پشتیبانی ۲۴/۷</span>
                            <span className={style.propIcon}>
                                <img src={support}/>
                            </span>
                        </div>
                        <p className={style.propPrg}>
                            هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی زرین‌پال، آماده‌ی پاسخ‌گویی و راهنمایی به کاربران هستیم
                        </p>
                    </div>
                </div>

                <div className={style.siteDescription}>
                    <h2>ویژگی‌های درگاه پرداخت زرین‌پال</h2>
                    <p>
                        درگاه پرداخت اینترنتی زرین‌پال، امکان مدیریت تراکنش‌های مالی در بستر وب را به راحتی امکان‌پذیر می‌کند و با پیاده‌سازی و اجرای راه‌کارهای هوشمندانه، باعث افزایش درصد تراکنش‌های موفق و سوددهی بیش‌تر می‌شود
                    </p>
                </div>
            </div>
        </>
    );
};

export default SiteProperty;