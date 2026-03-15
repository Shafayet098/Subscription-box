import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';
import { Helmet } from 'react-helmet';
import SliderPreview from '../../Components/Slider/SliderPreview';
import SubsCards from '../../Components/SubsCards/SubsCards';
import { useLoaderData, useNavigation } from 'react-router';
import Works from '../../Components/Works/Works';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import Loading from '../../Components/Loading/Loading';

const Home = () => {
    const cards = useLoaderData();
    const navigation = useNavigation()
    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
    return (
        <>
            <header className='pt-16'>
                <Helmet>
                    <title>Subscribe Box | Home</title>
                </Helmet>
                <div className=''>
                    <SliderPreview cards={cards}></SliderPreview>
                </div>
            </header>
            <main className='container mx-auto'>
                <section id='subscriptionCards' className='scroll-mt-16'>
                    <SubsCards cards={cards}></SubsCards>
                </section>
                <section id='works' className='mt-8 scroll-mt-8'>
                    <Works></Works>
                </section>
                <section>
                    <ChooseUs cards={cards}></ChooseUs>
                </section>
            </main>
        </>

    );
};

export default Home;