import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    //give location of currenly previous url
    const location = useLocation();
    const history = useHistory();
    //(module-59-8)kono page theke login e gele current prvious page location?.state diye sve kore rakhe or direct login page e gele shop page e direct hbe
    const redirect_uri = location.state?.from || '/shop';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result.user);
                history.push(redirect_uri);
            })
    }

    return (

        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john website? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;
