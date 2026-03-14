import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './../../Components/Context/AuthContext';

const Login = () => {
    const { signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('')
    console.log(location)
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(()=> {
                // console.log(res)
                navigate(location?.state || '/')
            }).catch(err => {
                console.log(err)
                const errorMessage = err.message;
                setError(errorMessage)
            })
    }
    return (
        <div className='pt-20'>
            <div className="card bg-base-100 w-full max-w-sm md:max-w-md shrink-0 shadow-2xl  mx-auto pt-6">
                <h1 className="text-center text-3xl font-bold">LogIn now!</h1>
                <div className="card-body">
                    <form onSubmit={handleSignIn} className="fieldset w-full">
                        <label className="label text-lg">Email</label>
                        <input type="email" className="input w-full" placeholder="Email" name='email' required />
                        <label className="label text-lg">Password</label>
                        <input type="password" className="input w-full" placeholder="Password" name='password' required />
                        <div><a className="link link-hover text-md">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p className='text-red-400'>{error}</p>
                    <p className='text-lg'>If you are new, please <Link to={'/register'} className='underline text-blue-500'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;