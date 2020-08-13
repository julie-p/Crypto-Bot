import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../base.js';
import '../styles/login.css';
import Nav from '../Components/Nav';
import MainHeader from '../Components/Header';
import InputLogin from '../Components/InputLogin';
import { Link } from 'react-router-dom';

const SignUp = ({ history }) => {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/list');
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return(
        <div>

            <MainHeader />

            <form 
                className="login-container"
                onSubmit={handleSignUp}
            >
                <h3>Create your account :</h3>
                
                <InputLogin />
                
                <h6>Already one of us ?</h6>
                <Link to="/">Login to your account</Link>
            </form>

        </div>
    )
};

export default withRouter(SignUp);