import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center text-blue-500'>
            <ScaleLoader color='#4285f4' />
        </div>
    );
};

export default Loading;