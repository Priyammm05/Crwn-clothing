import React from "react";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import './sign-in.styles.scss';

function SignIn() {
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default SignIn;
