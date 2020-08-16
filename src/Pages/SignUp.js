import React, { useCallback } from 'react';
import '../styles/login.css';
import Header from '../Components/Header';
import InputLogin from '../Components/InputLogin';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import app from '../base.js';

const SignUp = ({ history }) => {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/wallet');
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>

            <Header />

            <form 
                className="login-container"
                onSubmit={handleSignUp}
            >
                <h3>Create your account :</h3>
                
                <InputLogin />
                
                <h6>Already one of us ?</h6>
                <div>
                    <Link to="/" className="link link-underline">Login to your account</Link>
                </div>
            </form>

        </div>
    )
};

export default withRouter(SignUp);