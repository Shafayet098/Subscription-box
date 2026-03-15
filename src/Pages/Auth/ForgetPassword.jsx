import React, { useContext } from 'react';
import { AuthContext } from '../../Components/Context/AuthContext';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
    const { forgetpassword } = useContext(AuthContext);

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (!email) {
            toast.error("Please enter your email address");
            return;
        }

        forgetpassword(email)
            .then(() => {
                toast.success("Password reset email sent");
                window.location.href = "https://mail.google.com";
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };
    return (
        <div className="min-h-[80vh] flex justify-center items-center px-4">
            <form
                onSubmit={handleResetPassword}
                className="card bg-base-100 w-full max-w-md shadow-xl p-6 space-y-4"
            >
                <h2 className="text-2xl font-bold text-center">Forgot Password</h2>

                <input
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                    name='email'
                    required
                />

                <button className="btn btn-primary w-full">
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ForgetPassword;