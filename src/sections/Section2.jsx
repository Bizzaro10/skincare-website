import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set(imgRef.current, { scale: 1.1 });
            gsap.set(contentRef.current, { opacity: 0, y: 30 });

            // Create the main animation timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    end: "top 30%",
                    scrub: 0.7, // Smoother scrubbing with slight delay
                    markers: false, // Set to true for debugging
                    toggleActions: "play none none reset"
                },
                defaults: { ease: "power2.out" } // Smoother easing
            });

            tl.to(imgRef.current, {
                scale: 1,
                duration: 0.8
            })
                .to(contentRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6
                }, "-=0.3"); // Overlap animations slightly

        }, containerRef);

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-screen bg-p2 flex items-center justify-center p-4 overflow-hidden">
            <div ref={containerRef} className="relative w-full max-w-6xl h-[85vh] rounded-2xl overflow-hidden shadow-lg">
                {/* Background Image */}
                <img
                    ref={imgRef}
                    src="/images/woman3.png"
                    alt="Woman holding skincare product with natural leaves"
                    className="w-full h-full object-cover object-center"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Content Container */}
                <div ref={contentRef} className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center p-8 text-white">
                    <div className="space-y-4 max-w-lg mb-6">
                        <h2 className="text-4xl md:text-5xl font-light leading-tight">
                            Feel Beautiful Inside and Out <br /> with Every Product.
                        </h2>
                    </div>
                    <button className="px-8 py-2.5 bg-white text-[#2D3B36] rounded-full text-lg font-medium hover:bg-[#2D3B36] hover:text-white transition-all duration-300">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section2;