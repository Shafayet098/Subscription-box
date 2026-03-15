import React from 'react';
import { Link } from 'react-router';

const Card = ({card}) => {
    const {thumbnail,tech_category,price,frequency,id,name}=card
    return (
        <div className="transition border-2 p-2 
        hover:scale-105 border-opacity-30 border-primary
         hover:border-secondary  group hover:no-underline 
         focus:no-underline ">

            {/* Thumbnail */}
            <figure>
                <img
                    src={thumbnail}
                    alt={name}
                    className="h-56 w-full object-cover"
                />
            </figure>

            <div className="card-body">

                {/* Name */}
                <h2 className="card-title text-xl font-primary">
                    {name}
                </h2>

                {/* Category */}
                <p className="text-sm text-gray-500">
                    Category: {tech_category}
                </p>

                {/* Price */}
                <p className="text-lg font-semibold text-primary">
                    ${price}
                </p>

                {/* Frequency */}
                <p className="text-sm text-gray-600">
                    Billing: {frequency}
                </p>

                {/* View More Button */}
                <div className="w-full  mt-4 ">
                    <Link to={`/service/${id}`}>
                        <button className="btn btn-primary w-full">
                            View More
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Card;