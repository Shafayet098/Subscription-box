import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';
import { Helmet } from 'react-helmet';
import SliderPreview from '../../Components/Slider/SliderPreview';
import SubsCards from '../../Components/SubsCards/SubsCards';
import { useLoaderData } from 'react-router';

const Home = () => {
    const cards = useLoaderData();
    return (
        <>
            <header className='pt-16'>
                <Helmet>
                    <title>Subscribe Box | Home</title>
                </Helmet>
                <div>
                    <SliderPreview></SliderPreview>
                </div>
            </header>
            <main className='container mx-auto'>
                <section>
                    <SubsCards cards={cards}></SubsCards>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>

    );
};

export default Home;