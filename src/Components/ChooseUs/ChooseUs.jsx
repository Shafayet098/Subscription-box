import React from 'react';

const ChooseUs = ({cards}) => {
    return (
        <section className="py-20 bg-[#fff7fa]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <img
                            src={cards[0].thumbnail}
                            alt="Why choose us"
                            className="rounded-3xl shadow-lg w-full"
                        />
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                            Why Choose Our Subscription Boxes?
                        </h2>

                        <p className="mt-5 text-gray-600 text-lg">
                            We create carefully curated subscription boxes filled with useful,
                            exciting, and premium products tailored to different lifestyles and
                            preferences.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-pink-500 text-xl">✔</span>
                                <p className="text-gray-700">
                                    Personalized boxes designed around your interests
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-pink-500 text-xl">✔</span>
                                <p className="text-gray-700">
                                    Premium products and unique monthly surprises
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-pink-500 text-xl">✔</span>
                                <p className="text-gray-700">
                                    Flexible plans with smooth subscription management
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-pink-500 text-xl">✔</span>
                                <p className="text-gray-700">
                                    Reliable delivery and delightful unboxing experience
                                </p>
                            </div>
                        </div>

                        <button className="btn bg-primary text-white border-none hover:bg-secondary mt-8 rounded-full px-8">
                            Explore More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;