import React from 'react';

const Works = () => {
    return (
        <section className="py-20 bg-base-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        How It Works
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Getting your favorite subscription box is simple. Choose a box,
                        subscribe, and enjoy premium products delivered to your doorstep.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="bg-pink-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition">
                        <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-secondary text-white text-2xl font-bold">
                            1
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Choose a Box</h3>
                        <p className="text-gray-600">
                            Browse our collection of curated subscription boxes and select the
                            one that matches your interests.
                        </p>
                    </div>

                    <div className="bg-pink-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition">
                        <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-secondary text-white text-2xl font-bold">
                            2
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Subscribe Easily</h3>
                        <p className="text-gray-600">
                            Pick your billing frequency and complete your subscription in just
                            a few simple steps.
                        </p>
                    </div>

                    <div className="bg-pink-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition">
                        <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-secondary text-white text-2xl font-bold">
                            3
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Receive & Enjoy</h3>
                        <p className="text-gray-600">
                            Get a personalized box delivered every month and enjoy a fresh
                            unboxing experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;