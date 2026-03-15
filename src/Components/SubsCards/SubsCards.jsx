import React from 'react';
import { Link } from 'react-router';
import Card from '../Card/Card';

const SubsCards = ({ cards }) => {

    return (
        <div>
            <h1 className='text-6xl text-center mt-16 pb-8 font-bold text-primary'>Plans & Pricing</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default SubsCards;