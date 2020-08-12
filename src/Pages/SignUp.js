import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../base.js';
import '../styles/login.css';
import Nav from '../Components/Nav';
import Clock from '../Components/Clock';
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
        <div className="App">
            <Nav />

            <div className="header header-login">
                <Clock />
            </div>

            <form 
                className="login-container"
                onSubmit={handleSignUp}
            >
                <h3>Create your account :</h3>
                
                <input 
                    className="input-signin"
                    name="email"
                    type="email" 
                    placeholder="Email" 
                />

                <input 
                    className="input-signin"
                    name="password"
                    type="password"
                    placeholder="Password" 
                />

                <button className="btn btn-signin" type="submit">Go !</button>
                <Link to="/">Already have an account ?</Link>

            </form>

        </div>
    )
};

export default withRouter(SignUp);