const error = {};

const regex = new RegExp('^(\\+98|0)?9\\d{9}$');

const validate = (info, pageType) => {

    if (pageType === "SIGN-IN"){
        if (!info.phoneOrEmail)
            error.phoneOrEmail = "شماره همراه یا ایمیل الزامی است";

        else if (!(/\S+@\S+\.\S+/.test(info.phoneOrEmail) || regex.test(info.phoneOrEmail)))
            error.phoneOrEmail = "قالب شماره همراه یا ایمیل قابل قبول نیست";       
        else
            delete error.phoneOrEmail;
    }
    else{
        if (!info.name.trim())
            error.name = "نام الزامی است";
        else
            delete error.name;
        
        if (!info.lastname.trim())
            error.lastname = "نام خانوادگی الزامی است";
        else
            delete error.lastname;
        
        if (!info.phoneNumber)
            error.phoneNumber = "شماره همراه الزامی است";
        else if (!regex.test(info.phoneNumber))
            error.phoneNumber = "قالب شماره همراه قابل قبول نیست";
        else 
            delete error.phoneNumber
    }

    return error;
}
    
export { validate }