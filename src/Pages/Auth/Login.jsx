import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './../../Components/Context/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn,signInWithGoogle } = use(AuthContext);
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
            .then(() => {
                // console.log(res)
                toast.success('Successfully toasted!')
                navigate(location?.state || '/')
            }).catch(err => {
                console.log(err)
                const errorMessage = err.message;
                setError(errorMessage)
                toast.error(error)
            })
    }
    const handleGoogleLogin =()=>{
        signInWithGoogle()
        .then(()=>{
            toast.success('Successfully toasted!')
            console.log("Google login Successful")
            navigate(location?.state || '/')
        }).catch(err=>{
            console.log(err)
            const errorMessage = err.message;
            setError(errorMessage)
            toast.error(error)
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
                    {/* Google */}
                    <button onClick={handleGoogleLogin} className="btn bg-white hover:bg-secondary text-black hover:text-white border-[#e5e5e5]">
                        <svg className='rounded-full size-6' aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className='text-lg'>If you are new, please <Link to={'/register'} className='underline text-blue-500'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;