import React, { useCallback, useContext } from 'react';
import '../styles/login.css';
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import { AuthContext } from "../Auth.js";
import app from '../base.js';
import Header from '../Components/Header';
import InputLogin from '../Components/InputLogin';

const SignIn = ({ history }) => {

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app   
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/list");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/list" />;
    };

    return(
        <div >
            
            <Header />

            <form 
                className="login-container"
                onSubmit={handleLogin}
            >
                <h3>Login to your account :</h3>

                <InputLogin />
                
                <h6>First time ?</h6>
                <Link to="/signup">Create your account</Link>
            </form>

            

        </div>
    )
};

export default withRouter(SignIn);