import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styles
import style from '../styles/signUpOrSignIn.module.css';

// icons
import zarinpalLogo from '../icons/logo-white.svg';

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

const SignUp = () => {
    document.body.style.backgroundColor = "#eaecef";

    const [data, setData] = useState({
        info: {name: "", lastname: "", phoneNumber: ""},
        error: {},
        touch: {name: false, lastname: false, phoneNumber: false}
    });

    const[showLabel, setShowLabel] = useState({
        name: false,
        lastname: false,
        phoneNumber: false
    })
    
    useEffect(() => {
        setData({
            ...data, 
            error: validate(data.info)
        })
    }, [data.info])


    const fieldChangeHandler = (event) => {
        setData({
            ...data, 
            info: { ...data.info, [event.target.name]: event.target.value }
        })
    }

    const fieldFocusHandler = (event) => {
        setData({
            ...data,
            touch: { ...data.touch, [event.target.name]: true }
        })

        setShowLabel({ 
            name: false,
            lastname: false,
            phoneNumber: false,
            [event.target.name]: true
        })
    }

    const {info, error, touch} = data;

    const bodyClickHandler = () => {
        setShowLabel({ 
            name: false,
            lastname: false,
            phoneNumber: false,
        })
    }
    document.body.ondblclick = bodyClickHandler;


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

            setData({
                ...data,
                touch:{
                    name: true, 
                    lastname: true, 
                    phoneNumber: true
                }
            })
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
                    <h2>ثبت‌نام در زرین‌‌پال</h2>
                    <p>
                        برای استفاده از خدمات زرین‌پال ثبت‌نام کنید.در صورت ثبت نام در زرین پال
                        وارد <Link to='/sign-in' className={style.singInLink}>حساب کاربری</Link> خود شوید
                    </p>
                </section>
                <form className={style.fields}>
                    <section className={style.field}>
                        {/* label's props are one data for change input and label style */}

                        <Label className={style.lblInput} focus={showLabel.name} 
                            inputVal={info.name} error={error.name} touch={touch.name}> 
                            نام
                        </Label>

                        <Input type="text" autoComplete='0' placeholder='نام' name='name' className={style.fieldsInput}
                            onChange={fieldChangeHandler} onFocus={fieldFocusHandler}
                            inputVal={info.name} error={error.name} touch={touch.name} focus={showLabel.name}/>

                        <span className={style.error}>{touch.name && error.name}</span>
                    </section>

                    <section className={style.field}>
                        <Label className={style.lblInput} focus={showLabel.lastname} 
                            inputVal={info.lastname} error={error.lastname} touch={touch.lastname}>
                            نام خانوادگی
                        </Label>

                        <Input type="text" autoComplete='0' placeholder='نام خانوادگی' name='lastname' className={style.fieldsInput} 
                            onChange={fieldChangeHandler} onFocus={fieldFocusHandler}
                            inputVal={info.lastname} error={error.lastname} touch={touch.lastname} focus={showLabel.lastname}/>

                        <span className={style.error}>{touch.lastname && error.lastname}</span>
                    </section>

                    <section className={style.field}>
                        <Label className={style.lblInput} focus={showLabel.phoneNumber} inputVal={info.phoneNumber} 
                            error={error.phoneNumber} touch={touch.phoneNumber}>
                            شماره همراه
                        </Label>

                        <Input type="text" autoComplete='0' placeholder='شماره همراه' name='phoneNumber' className={style.fieldsInput}
                            onChange={fieldChangeHandler} onFocus={fieldFocusHandler}
                            inputVal={info.phoneNumber} error={error.phoneNumber} touch={touch.phoneNumber} focus={showLabel.phoneNumber}/>

                        <span className={style.error}>{touch.phoneNumber && error.phoneNumber}</span>
                    </section>
                </form>
                <section className={style.btnSection}>
                    <button className={style.signUpBtn} ref={submitRef} onClick={submitHandler}>ثبت نام</button>
                    <button className={style.signUpBtn} ref={crossRef} style={{display: "none"}}>×</button>
                </section>
            </div>
        </div>
    );
};

export default SignUp;