import React, { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';


// style
import style from './signUpOrSignIn.module.css';

// images
import zarinpalLogo from '../images/logo-white.svg';

// helper
import { validate } from '../helper/fuctions';

// styledComponents
const Label = styled.label`
    opacity: ${(props) => (props.focus || props.inputVal) ? "1" : "0"};
    color: ${(props) => (props.error && props.touch) ? "#de0000" : 
            !props.error && props.inputVal ? "#000099" : "#ababab"};

    top: ${(props) => (props.focus || props.inputVal) ? "-8px" : "15px"};
    z-index: ${(props) => (props.focus || props.inputVal) ? "99" : "-1"};
`

const Input = styled.input`
    border: 2px solid ${(props) => (props.error && props.touch) ? "#de0000" : 
            !props.error && props.inputVal ? "#000099" : "#a9a9a9"};;
    
    ::placeholder{
        color: ${(props) => (props.error && props.touch) ? "#de0000" : 
            !props.error && props.inputVal ? "#000099" : "#ababab"};

        opacity: ${(props) => (props.focus || props.inputVal) ? 0 : 1};
        font-size: 0.8rem;
        transition: 0.3s;
    }
`

const SignIn = () => {
    document.body.style.backgroundColor = "#eaecef";

    const [data, setData] = useState({
        info: {phoneOrEmail: ""},
        error: {},
        touch: {phoneOrEmail: false}
    });

    const[showLabel, setShowLabel] = useState({ phoneOrEmail: false })
    
    useEffect(() => {
        setData({
            ...data, 
            error: validate(data.info, "SIGN-IN")
        })
    }, [data.info])


    const fieldChangeHandler = (event) => {
        setData({ ...data, info: { [event.target.name]: event.target.value } })
    }

    const fieldFocusHandler = (event) => {
        setData({ ...data, touch: { [event.target.name]: true } })

        setShowLabel({ [event.target.name]: true })
    }

    const {info, error, touch} = data;

    document.body.ondblclick = () => setShowLabel({ phoneOrEmail: false });

    const submitRef = useRef();
    const crossRef = useRef();
    const submitHandler = () => {
        if (Object.keys(error).length){
            crossRef.current.style.display = "block";
            submitRef.current.style.display = "none";

            setTimeout(() => {
                crossRef.current.style.display = "none";
                submitRef.current.style.display = "block";
            }, 2000);

            setData({ ...data, touch:{ phoneOrEmail: true } })
        }
        else{
            alert("به زرین پال خوش آمدید");
        }
    }

    return (
        <div className={style.signUpSignInContainer}>
            <div className={style.aplicationImage}></div>
            <div className={style.rightDiv}>
                <section className={style.logo}>
                    <img src={zarinpalLogo}/>
                </section>
                <section className={style.rightPhrase}>
                    <h2>ورود به زرین‌‌پال</h2>
                    <p>
                        برای استفاده از خدمات زرین‌پال وارد حساب کاربری خود شوید.در صورت نداشتن حساب کاربری
                        <Link to='/sign-up' className={style.singInLink}> ثبت‌نام </Link> کنید 
                    </p>
                </section>
                <form className={style.signInfields}>
                    <section className={style.field}>
                        <Label className={style.lblInput} focus={showLabel.phoneOrEmail} inputVal={info.phoneOrEmail} 
                            error={error.phoneOrEmail} touch={touch.phoneOrEmail}>
                            شماره همراه یا ایمیل
                        </Label>

                        <Input type="text" autoComplete='0' placeholder='شماره همراه یا ایمیل' name='phoneOrEmail' className={style.signInfieldsInput}
                            onChange={fieldChangeHandler} onFocus={fieldFocusHandler}
                            inputVal={info.phoneOrEmail} error={error.phoneOrEmail} touch={touch.phoneOrEmail} focus={showLabel.phoneOrEmail}/>

                        <span className={style.error}>{touch.phoneOrEmail && error.phoneOrEmail}</span>
                    </section>
                </form>
                <section className={style.btnSection}>
                    <button className={style.signUpBtn} ref={submitRef} onClick={submitHandler}>تأیید و ادامه</button>
                    <button className={style.signUpBtn} ref={crossRef} style={{display: "none"}}>×</button>
                </section>
            </div>
        </div>
    );
};

export default SignIn;