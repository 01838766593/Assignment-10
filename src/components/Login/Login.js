import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, isLogin,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        handleResetPassword,
        handleRegistration,
        error } = useAuth();
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
        <div className="mx-5">
            <form onSubmit={handleRegistration}>
                <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">
                    {isLogin ? 'Login' : 'Register'}
                </button>
                <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm">Reset Password</button>

            </form>
            <br /><br /><br />
            <div>--------------------------------</div>
            <br /><br /><br />
            <button onClick={handleGoogleLogin}>Google Sign In</button>
        </div>



        // <div className="login-form">
        //     <div>
        //         <h2>Login</h2>
        //         <form>
        //             <input type="email" name="" id="" placeholder="Your Email" />
        //             <br />
        //             <input type="password" name="" id="" />
        //             <br />
        //             <input type="submit" value="Submit" />
        //         </form>
        //         <p>new to ema-john website? <Link to="/register">Create Account</Link></p>
        //         <div>-------or----------</div>
        //         <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign in</button>
        //     </div>
        // </div>
    );
};

export default Login;
