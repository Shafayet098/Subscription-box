import React from 'react';
import animation from './../../assets/hero-animation.svg'
const Hero = () => {
    return (
            <div className="bg-secondary">
                <div className='relative max-h-[calc(100vh-130px)] overflow-hidden' >
                    <div className='overflow-hidden'>
                        <img src={animation} alt="" className=" mx-auto mb-12  max-h-[700px] rounded-lg shadow-md lg:-mt-40" />
                    </div>
                    <div className="absolute top-0 container flex flex-col justify-center items-center px-4 sm:py-16 sm:pb-24 mx-auto text-center lg:pb-56 md:py-16 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-3xl sm:text-5xl font-bold leading-none xl:max-w-3xl text-accent pt-8">Unbox Happiness Every Month</h1>
                        <p className="mt-6 mb-2 text-lg sm:mb-12 xl:max-w-3xl text-primary">Join our subscription community and receive carefully curated boxes packed with amazing products tailored to your lifestyle and passions</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-primary text-gray-50 border border-gray-300 
                            hover:bg-violet-900">Get started</button>
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-primary text-gray-50 border border-gray-300 
                            hover:bg-violet-900">Learn more</button>
                        </div>
                    </div>
                </div>


            </div>
    );
};

export default Hero;