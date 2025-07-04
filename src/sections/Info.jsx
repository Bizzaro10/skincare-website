import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const fadedTextRef = useRef(null);

    useEffect(() => {
        // Split text into words
        const mainText = new SplitType(textRef.current, { types: "words" });
        const fadedText = new SplitType(fadedTextRef.current, { types: "words" });

        // Style each word
        [...mainText.words, ...fadedText.words].forEach((word) => {
            gsap.set(word, {
                display: "inline-block",
                position: "relative",
                padding: "0 0.1em",
                margin: "0 -0.1em",
                color: word.closest(".text-p1") ? "var(--p1)" : "#2F3E36",
                opacity: 0.2, // Initial light state
            });
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse",
            },
        });

        // Animate main text words
        mainText.words.forEach((word, index) => {
            tl.to(
                word,
                {
                    opacity: 1,
                    duration: 0.5,
                    ease: "none",
                },
                index * 0.1
            );
        });

        // Animate faded text words
        fadedText.words.forEach((word, index) => {
            tl.to(
                word,
                {
                    opacity: 1,
                    duration: 0.5,
                    ease: "none",
                },
                `>-0.${15 - (index % 5)}`
            );
        });

        return () => {
            // Cleanup
            mainText.revert();
            fadedText.revert();
            tl.kill();
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="min-h-screen flex items-center justify-center px-8 py-16 bg-#FEFFF4"
        >
            <div className="max-w-[90vw] mx-auto">
                <p className="text-[#2F3E36] text-4xl md:text-6xl lg:text-7xl leading-tight font-light">
          <span ref={textRef}>
            Experience the ultimate in skincare with our expertly formulated
            products, crafted to nourish, protect, and rejuvenate your skin.
            Combining the finest natural ingredients with{" "}
          </span>
                    <span ref={fadedTextRef} className="text-p1">
            advanced science, our collection ensures every skin type can achieve
            a radiant, healthy glow. Embrace your beauty with confidence every
            day.
          </span>
                </p>
            </div>
        </section>
    );
};

export default Info;
