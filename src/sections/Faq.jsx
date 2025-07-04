import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Faq = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqItems = [
        {
            question: "Are your products safe for sensitive skin?",
            hasContent: true
        },
        {
            question: "Are your products cruelty-free?",
            hasContent: true,
            answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics."
        },
        {
            question: "What's your return policy?",
            hasContent: true
        },
        {
            question: "Do you ship internationally?",
            hasContent: true
        },
        {
            question: "How do I choose the right product?",
            hasContent: true
        }
    ];

    return (
        <div className="flex min-h-screen bg-p2">
            {/* Left Side - Image */}
            <div className="w-1/2 bg-p2 flex items-center justify-center p-12 relative">
                <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[75%] h-[65vh]">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                        <img
                            src="images/product3.jpg"
                            alt="Woman with green eye patches"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Award Badge */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-p2 backdrop-blur-lg pl-2 pr-6 py-4 rounded-full flex items-center gap-4 border border-white/40">
                        <div className="w-11 h-11 bg-[#2D3B36] rounded-full flex items-center justify-center -ml-1 shadow-sm">
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-p2"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M3 17V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V17M8.28571 21C7.02335 21 6 19.9767 6 18.7143V15.2857C6 14.0233 7.02335 13 8.28571 13C9.23249 13 10 13.7675 10 14.7143V19.2857C10 20.2325 9.23249 21 8.28571 21ZM15.7143 21C16.9767 21 18 19.9767 18 18.7143V15.2857C18 14.0233 16.9767 13 15.7143 13C14.7675 13 14 13.7675 14 14.7143V19.2857C14 20.2325 14.7675 21 15.7143 21Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="text-sm font-medium text-p1 tracking-tight">
                            Best Skin Care Product
                            <br />
                            Award Winning
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - FAQ Content */}
            <div className="w-1/2 flex flex-col justify-center p-12">
                {/* Header */}
                <div className="space-y-6 mb-8">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-p2 text-sm text-p1 border-p1">
                        <span className="w-2 h-2 bg-p2 rounded-full mr-2"></span>
                        Frequently Asked Question
                    </div>

                    <h1 className="text-4xl font-inter text-p1 leading-tight">
                        Answers to Your<br />
                        Skincare Questions, All<br />
                        in One Place.
                    </h1>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl bg-white">
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-p1 font-medium">{item.question}</span>
                                {openItems[index] ? (
                                    <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                )}
                            </button>

                            {openItems[index] && item.answer && (
                                <div className="px-6 pb-4">
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;