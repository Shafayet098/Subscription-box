import React from 'react';
import err from './../assets/pageNotFound.jpg'
const Error = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <img src={err} alt="" />
        </div>
    );
};

export default Error;