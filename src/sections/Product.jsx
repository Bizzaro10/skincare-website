import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Product = () => {
    // Create refs for animated elements
    const buttonRef = useRef(null);
    const headingRef = useRef(null);
    const descriptionRef = useRef(null);
    const featuresRef = useRef(null);
    const imageRef = useRef(null);
    const badgeRef = useRef(null);
    const sinceRef = useRef(null);

    useEffect(() => {
        // Set initial states
        gsap.set([buttonRef.current, headingRef.current, descriptionRef.current], {
            autoAlpha: 0,
            y: 30,
        });

        gsap.set(featuresRef.current.children, {
            autoAlpha: 0,
            x: -30,
        });

        gsap.set(imageRef.current, {
            autoAlpha: 0,
            scale: 0.9,
        });

        gsap.set([badgeRef.current, sinceRef.current], {
            autoAlpha: 0,
            y: 20,
        });

        // Create animation timeline
        const tl = gsap.timeline({
            delay: 0.2,
            defaults: { ease: "power4.out" },
        });

        // Animate elements
        tl.to(buttonRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
        })
            .to(
                headingRef.current,
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                },
                "-=0.6"
            )
            .to(
                descriptionRef.current,
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                },
                "-=0.6"
            )
            .to(
                featuresRef.current.children,
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.2,
                },
                "-=0.6"
            )
            .to(
                imageRef.current,
                {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 1,
                },
                "-=0.8"
            )
            .to(
                [badgeRef.current, sinceRef.current],
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                },
                "-=0.6"
            );
    }, []);

    return (
        <section className="w-full min-h-screen bg-#FEFFF4 px-8 py-16 flex items-center relative overflow-hidden">
            <div className="container mx-auto grid grid-cols-2 gap-25">
                {/* Left Content */}
                <div className="flex flex-col">
                    {/* Top Button */}
                    <button
                        ref={buttonRef}
                        className="w-fit px-4 py-2 rounded-full bg-p2 text-[#2D3B36] border border-[#2D3B36] text-sm opacity-0 flex items-center gap-2"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D3B36]"></span>
                        Why Our Products
                    </button>

                    {/* Main Heading */}
                    <h2
                        ref={headingRef}
                        className="mt-12 text-5xl font-inter leading-tight opacity-0"
                    >
                        YOUR SKIN DESERVES
                        <br />
                        THE BEST CARE.
                    </h2>

                    {/* Description */}
                    <p
                        ref={descriptionRef}
                        className="mt-6 text-sm text-gray-600 max-w-md opacity-0"
                    >
                        Discover a curated collection of skincare products designed to
                        rejuvenate, protect, and pamper your skin. Explore our rage crafted
                        with love backed by science, and inspired by nature.
                    </p>

                    {/* Features List */}
                    <div ref={featuresRef} className="mt-16 space-y-12">
                        {/* Feature 1 */}
                        <div className="flex items-start gap-8 opacity-0">
              <span className="text-4xl font-light bg-gradient-to-b from-[#2D3B36] to-transparent bg-clip-text text-transparent">
                01
              </span>
                            <div>
                                <h3 className="text-3xl font-inter">Bio Ingredients</h3>
                                <p className="mt-2 text-sm text-gray-600 max-w-md">
                                    Get naturally beautiful and transform with our bio ingredients
                                    creams for healthy, radiant skin.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start gap-8 opacity-0">
              <span className="text-4xl font-light bg-gradient-to-b from-[#2D3B36] to-transparent bg-clip-text text-transparent">
                02
              </span>
                            <div>
                                <h3 className="text-3xl font-inter">Everything Natural</h3>
                                <p className="mt-2 text-sm text-gray-600 max-w-md">
                                    Pure ingredients for pure skin. The Perfect solution for your
                                    skin care needs.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-start gap-8 opacity-0">
              <span className="text-4xl font-light bg-gradient-to-b from-[#2D3B36] to-transparent bg-clip-text text-transparent">
                03
              </span>
                            <div>
                                <h3 className="text-3xl font-inter">All Handmade</h3>
                                <p className="mt-2 text-sm text-gray-600 max-w-md">
                                    Made with love and care. Just for you. Give your skin the
                                    tender loving care it deserves.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content - Image Section */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[35%] h-[85vh]">
                    <div
                        ref={imageRef}
                        className="w-full h-full rounded-3xl overflow-hidden opacity-0"
                    >
                        <img
                            src="images/woman2.png"
                            alt="Woman with green eye patches"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Award Badge */}
                    <div
                        ref={badgeRef}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-p2 backdrop-blur-lg pl-2 pr-6 py-4 rounded-full flex items-center gap-4 opacity-0 border border-white/40"
                    >
                        <div className="w-11 h-11 bg-[#2D3B36] rounded-full flex items-center justify-center -ml-1 shadow-sm">
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-p2"
                            >
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M17.8114 5.49V6.23L14.2714 4.18C12.9314 3.41 11.0614 3.41 9.73141 4.18L6.19141 6.24V5.49C6.19141 3.24 7.42141 2 9.67141 2H14.3314C16.5814 2 17.8114 3.24 17.8114 5.49Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M17.84 7.96828L17.7 7.89828L16.34 7.11828L13.52 5.48828C12.66 4.98828 11.34 4.98828 10.48 5.48828L7.66 7.10828L6.3 7.90828L6.12 7.99828C4.37 9.17828 4.25 9.39828 4.25 11.2883V15.8083C4.25 17.6983 4.37 17.9183 6.16 19.1283L10.48 21.6183C10.91 21.8783 11.45 21.9883 12 21.9883C12.54 21.9883 13.09 21.8683 13.52 21.6183L17.88 19.0983C19.64 17.9183 19.75 17.7083 19.75 15.8083V11.2883C19.75 9.39828 19.63 9.17828 17.84 7.96828ZM14.79 13.4983L14.18 14.2483C14.08 14.3583 14.01 14.5683 14.02 14.7183L14.08 15.6783C14.12 16.2683 13.7 16.5683 13.15 16.3583L12.26 15.9983C12.12 15.9483 11.89 15.9483 11.75 15.9983L10.86 16.3483C10.31 16.5683 9.89 16.2583 9.93 15.6683L9.99 14.7083C10 14.5583 9.93 14.3483 9.83 14.2383L9.21 13.4983C8.83 13.0483 9 12.5483 9.57 12.3983L10.5 12.1583C10.65 12.1183 10.82 11.9783 10.9 11.8583L11.42 11.0583C11.74 10.5583 12.25 10.5583 12.58 11.0583L13.1 11.8583C13.18 11.9883 13.36 12.1183 13.5 12.1583L14.43 12.3983C15 12.5483 15.17 13.0483 14.79 13.4983Z"
                                        fill="currentColor"
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

                    {/* Since Text */}
                    <div
                        ref={sinceRef}
                        className="absolute -bottom-6 right-8 flex items-center justify-between w-[90%] opacity-0"
                    >
                        <span className="text-sm font-medium">SINCE 2001</span>
                        <a href="#" className="text-sm font-medium text-p1 hover:underline">
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
