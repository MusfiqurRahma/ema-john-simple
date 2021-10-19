import React from 'react';
import './LogIn.css';
import { Link,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
        .catch((err)=> console.log(err))
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='Your Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-John? <Link to='/register'>Create Account</Link></p>
                <div>---------or----------</div>
                <button onClick={handleGoogleLogin} className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default LogIn;