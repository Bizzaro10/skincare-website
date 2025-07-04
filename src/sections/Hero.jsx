import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Register GSAP
gsap.registerPlugin();

const Hero = () => {
    const leftContentRef = useRef(null);
    const headingRef = useRef(null);
    const rightProductRef = useRef(null);
    const overlayTextRef = useRef(null);
    const productInfoRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        // Set initial states
        gsap.set([rightProductRef.current, productInfoRef.current], {
            autoAlpha: 0,
            scale: 0,
            // rotation: 180,
        });

        gsap.set(headingRef.current, {
            autoAlpha: 1,
        });

        gsap.set(headingRef.current.children, {
            autoAlpha: 0,
            scale: 0,
            y: 100,
        });

        gsap.set(leftContentRef.current, {
            autoAlpha: 0,
            x: -100,
            rotation: -30,
        });

        gsap.set(overlayTextRef.current, {
            autoAlpha: 0,
            scale: 1.5,
            y: 100,
        });

        gsap.set(buttonRef.current, {
            autoAlpha: 0,
            scale: 0,
            y: 50,
        });

        // Create main timeline with a slight delay to let page load
        const tl = gsap.timeline({
            delay: 2,
            defaults: { ease: "elastic.out(1, 0.75)" },
        });

        // Animate GLOW NATURALLY text
        tl.to(headingRef.current.children, {
            scale: 1,
            y: 0,
            autoAlpha: 1,
            duration: 3,
            stagger: 0.2,
            ease: "power4.out",
        });

        // Animate left content with smooth swing
        tl.to(
            leftContentRef.current,
            {
                x: 0,
                rotation: 0,
                autoAlpha: 1,
                duration: 2,
                ease: "power2.out",
            },
            "-=1"
        );

        // Animate right product image with spin
        tl.to(
            rightProductRef.current,
            {
                scale: 1,
                x: 1,
                autoAlpha: 1,
                duration: 2,
                ease: "power4.out",
            },
            "-=1"
        );

        // Animate button with bounce
        tl.to(
            buttonRef.current,
            {
                scale: 1,
                y: 0,
                autoAlpha: 1,
                duration: 2,
                ease: "bounce.out",
            },
            "-=1"
        );

        // Animate SKINCARE overlay text with float up
        tl.to(
            overlayTextRef.current,
            {
                scale: 1,
                y: 0,
                autoAlpha: 1,
                duration: 2,
                ease: "power4.out",
            },
            "-=1.5"
        );

        // Animate product info overlay with playful pop
        tl.to(
            productInfoRef.current,
            {
                scale: 1,
                rotation: 0,
                autoAlpha: 1,
                duration: 2,
                ease: "elastic.out(1, 0.5)",
            },
            "-=1"
        );

        // Cleanup function
        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section className="relative bg-s1 min-h-screen overflow-hidden">
            {/* Product Image - Top Right */}
            <div
                ref={rightProductRef}
                className="absolute top-8 right-8 w-32 h-32 md:w-40 md:h-40 z-30"
                style={{ visibility: "hidden" }}
            >
                <img
                    src="images/product.jpg"
                    alt="Skincare Product"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Left Content */}
            <div
                ref={leftContentRef}
                className="absolute top-[120px] left-[80px] z-30"
                style={{ visibility: "hidden" }}
            >
                <div className="flex flex-col">
                    <p className="text-[#2F3E36] text-lg self-end mb-2">
                        Transform your routine
                    </p>
                    <p className="text-[#2F3E36] text-lg max-w-[400px]">
                        with premium products that restore, protect, and enhance your
                        natural glow every day.
                    </p>
                </div>
            </div>

            {/* Shop Now Button */}
            <div
                ref={buttonRef}
                className="absolute bottom-[340px] left-[140px] z-30"
                style={{ visibility: "hidden" }}
            >
                <button className="bg-[#2F3E36] text-white text-base font-medium px-8 py-3.5 rounded-[40px] hover:bg-[#3F4E46] transition-colors">
                    Shop Now
                </button>
            </div>

            {/* Center Heading */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 z-30">
                <h1
                    ref={headingRef}
                    className="text-[#2F3E36] text-5xl md:text-7xl font-bold text-left leading-[1.3] whitespace-nowrap"
                >
                    <span className="block opacity-0">GLOW</span>
                    <span className="block ml-[0.1rem] opacity-0">NATUR-</span>
                    <span className="block ml-[-1rem] opacity-0">ALLY</span>
                </h1>
            </div>

            {/* Bottom Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <h2
                    ref={overlayTextRef}
                    className="text-[#2F3E36] text-[12rem] md:text-[20rem] font-bold opacity-100 tracking-wider leading-none"
                    style={{ visibility: "hidden" }}
                >
                    SKINECARE
                </h2>
            </div>

            {/* Hero Image Container */}
            <div
                className="absolute w-[480px] h-[520px] z-20"
                style={{
                    left: "calc(50% - 480px/2)",
                    top: "380px",
                }}
            >
                <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                    <img
                        src="images/woman.png"
                        alt="Woman with natural skincare routine"
                        className="w-full h-full object-cover"
                    />
                    {/* Product Info Overlay */}
                    <div
                        ref={productInfoRef}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-[#E8F3E8] py-2 px-3 rounded-[50px] w-[380px]"
                        style={{ visibility: "hidden" }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full border-2 border-dotted border-[#2F3E36] opacity-30"></div>
                                <img
                                    src="images/product.jpg"
                                    alt="Product Icon"
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                            </div>
                            <p className="text-sm text-[#2F3E36]">
                                While giving you an invigorating cleansing experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
