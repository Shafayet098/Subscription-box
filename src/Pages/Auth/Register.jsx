// import React, { use, useState } from 'react';
import { Link } from 'react-router';
// import { AuthContext } from '../Context/AuthContext';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

const Register = () => {
    // const {signUp,updateUser} = use(AuthContext)
    // const navigate = useNavigate();
    // const [error,setError] = useState('') 
    // const [show, setShow]= useState(false)
    

    const handleSignUp =(e)=>{
        e.preventDefault();
        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const obj = {displayName, photoURL}
        console.log(displayName,photoURL, email, password)
        const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if(regExp.test(password)===false){
            // setError("Password must be lest 8 characters, at lest one capital letter, one small letter, one number")
            // return 
        }

        // signUp(email, password)
        // .then(()=>{
        //     // console.log(res)
        //     updateUser(obj).then(()=>{
        //         console.log("Profile Updated")
        //         navigate('/')
        //     }).catch(err=>{
        //         setError(err)
        //     })
        // }).catch(err=>{
        //     setError(err)
            
        // })
    }
    return (
        <div className='pt-14 flex items-center justify-center'>
            <div className="card bg-base-100 w-full max-w-sm sm:max-w-md shrink-0 shadow-2xl  mx-auto mt-4 pt-4">
                <h1 className='text-center text-2xl font-semibold'>Register Your Account</h1>
                <div className="card-body">
                    <form onSubmit={handleSignUp} className="fieldset">
                        <label className="label text-lg">Name</label>
                        <input type="text" className="input w-full" name='name' placeholder="Name" required />
                        {/* {
                            nameError && <p className='text-red-400'>{nameError}</p>
                        } */}
                        <label className="label text-lg">Photo URL</label>
                        <input type="text" className="input w-full" placeholder="Photo URL" name='photo' required />
                        <label className="label text-lg">Email</label>
                        <input type="email" className="input w-full" placeholder="Email" name='email' required />
                        <label className="label text-lg">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" required />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className='test-red-400'>{'error'}</p>
                    <p className='text-lg'>Don't have an account? <Link to={'/login'} className='underline text-blue-500'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;