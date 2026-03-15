import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CardDetails = () => {
    const { id } = useParams();
    const data = useLoaderData()
    const card = data.find(card => card.id === parseInt(id))
    // console.log(card)
    // console.log(id)

    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("");
    const [reviews, setReviews] = useState([]);


    const handleReviewSubmit = (e) => {
        e.preventDefault();

        const numericRating = parseInt(rating);

        if (!reviewText.trim()) {
            alert("Please write a review.");
            return;
        }

        if (isNaN(numericRating) || numericRating < 1 || numericRating > 5) {
            alert("Rating must be between 1 and 5.");
            return;
        }

        const newReview = {
            id: Date.now(),
            review: reviewText,
            rating: numericRating,
        };

        setReviews([...reviews, newReview]);
        setReviewText("");
        setRating("");
    };
    return (
        <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                    src={card.banner}
                    alt={card.name}
                    className="w-full h-[350px] object-cover"
                />

                <div className="p-6 md:p-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        {card.name}
                    </h1>

                    <p className="text-gray-600 mb-4">{card.description}</p>

                    <div className="space-y-2 mb-6">
                        <p>
                            <span className="font-semibold">Category:</span>{" "}
                            {card.tech_category}
                        </p>
                        <p>
                            <span className="font-semibold">Price:</span> ${card.price}
                        </p>
                        <p>
                            <span className="font-semibold">Frequency:</span>{" "}
                            {card.frequency}
                        </p>
                        <p>
                            <span className="font-semibold">Ratings:</span>{" "}
                            {card.ratings}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-3">Features</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {card.features?.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t pt-8 border-dashed border-slate-400">
                        <h2 className="text-2xl font-bold mb-4">Add Your Review</h2>

                        <form onSubmit={handleReviewSubmit} className="space-y-4">
                            <div>
                                <label className="block font-medium mb-2">Review</label>
                                <textarea
                                    value={reviewText}
                                    onChange={(e) => setReviewText(e.target.value)}
                                    placeholder="Write your review here"
                                    className="textarea textarea-bordered w-full h-28"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-2">
                                    Rating (1 to 5)
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="5"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                    placeholder="Enter rating"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Review
                            </button>
                        </form>
                    </div>

                    <div className="border-t border-dashed border-slate-400 pt-8 mt-8">
                        <h2 className="text-2xl font-bold mb-4">Submitted Reviews</h2>

                        {reviews.length === 0 ? (
                            <p className="text-gray-500">No reviews submitted yet.</p>
                        ) : (
                            <div className="space-y-4">
                                {reviews.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-gray-50 border rounded-xl p-4 shadow-sm"
                                    >
                                        <p className="mb-2 text-gray-700">{item.review}</p>
                                        <p className="font-medium text-pink-600">
                                            Rating: {item.rating}/5
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;