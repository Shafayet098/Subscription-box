import React from 'react';
import Nav from '../../Components/Nav/Nav';
import { Outlet } from 'react-router';
import { Helmet } from 'react-helmet';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
                <div className='bg-base-100 shadow-lg'>
                    <Nav></Nav>
                </div>
                <div className=''>
                    <Outlet></Outlet>
                </div>
                <div className=''>
                    <Footer></Footer>
                </div>
        </div>
    );
};

export default Root;