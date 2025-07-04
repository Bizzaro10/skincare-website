import React from "react";
import Card from "../components/Card";
// import Header2 from "./Header2";

const Buy = () => {
    const products = [
        {
            id: 1,
            image: "/images/product4.jpg",
            title: "ALYA SKIN CLEANSER",
            price: "29.99",
        },
        {
            id: 2,
            image: "/images/product2.jpg",
            title: "RITUAL OF SAKURA",
            price: "27.99",
        },
        {
            id: 3,
            image: "/images/product3.jpg",
            title: "THE BODY LOTION",
            price: "19.99",
        },
    ];

    return (
        <section className="w-full min-h-screen bg-#FEFFF4 px-8 py-16">
            {/* Header Section */}
            {/*<Header2 />*/}

            {/* Products Grid */}
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            onClick={() => console.log(`Add to cart: ${product.title}`)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Buy;
