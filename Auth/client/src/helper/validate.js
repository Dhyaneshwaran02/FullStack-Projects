import tost from 'react-hot-toast'
/**validate login pg username */
export async function usernameValidate(values){
    const errors=usernameVerify({},values)
    return errors;
}

/**validate password*/
export async function passwordValidate(values){
    const errors=passwordVerify({},values)
    return errors;
}

/**validate password */
function passwordVerify(errors={},values){

    if(!values.password){
        errors.password=tost.error("Password required")
    }else if(values.password.includes(" ")){
        errors.password=tost.error("Wrong Password")
    }else if(values.password.length < 4){
        errors.password=tost.error("Password Must Be More than 4 characters Long")
    }
    return errors;

}

/**Validate username */
function usernameVerify(error = {},values){
    if(!values.username){
        error.username=tost.error('Username Required')
    }else if(values.username.includes(" ")){
        error.username=tost.error("Invalid Username..!")
    }
    return error;
}