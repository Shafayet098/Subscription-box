import React from 'react';
import Nav from '../../Components/Nav/Nav';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <div className='bg-base-100 shadow-lg'>
                <Nav></Nav>
            </div>
            <div className=''>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;