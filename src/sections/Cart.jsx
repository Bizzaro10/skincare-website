import React from 'react';
import Card from "../components/Card.jsx";
import Buy from "./Buy.jsx";

const ProductCategories = () => {
    return (
        <section className="w-full py-12 px-8 bg-p2">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-light text-[#2D3B36] mb-4">
                    Feel Beautiful Inside and Out <br/> with Every Product.
                </h1>

            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                <button className="bg-[#2F3E36] text-white text-base font-medium px-8 py-3.5 rounded-[40px] hover:bg-[#3F4E46] transition-colors">
                    NEW ARRIVAL
                </button>
                <button className="bg-white text-[#2D3B36] border border-[#2D3B36] text-base font-medium px-8 py-3.5 rounded-[40px] hover:bg-[#2D3B36] hover:text-white transition-colors">
                    CLEANSING
                </button>
                <button className="bg-white text-[#2D3B36] border border-[#2D3B36] text-base font-medium px-8 py-3.5 rounded-[40px] hover:bg-[#2D3B36] hover:text-white transition-colors">
                    ACNE FIGHTER
                </button>
                <button className="bg-white text-[#2D3B36] border border-[#2D3B36] text-base font-medium px-8 py-3.5 rounded-[40px] hover:bg-[#2D3B36] hover:text-white transition-colors">
                    ANTI AGING
                </button>
            </div>



            {/* Product Cards - Assuming your Card component handles these */}
           <Buy/>
        </section>
    );
};

export default ProductCategories;