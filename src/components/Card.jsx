import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Card = ({ image, title, price, onClick }) => {
    const cardRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Initial setup - maximum zoom in
        gsap.set(imageRef.current, {
            scale: 1.4,
            opacity: 1,
        });

        // Create hover animation
        const card = cardRef.current;
        const image = imageRef.current;

        // Create the zoom out animation for scroll trigger
        // This will be controlled by the parent component's timeline
        gsap.to(image, {
            scale: 1.1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // Hover animations
        const enterAnimation = gsap.to(image, {
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            paused: true,
        });

        const leaveAnimation = gsap.to(image, {
            scale: 1.1,
            duration: 0.7,
            ease: "power2.out",
            paused: true,
        });

        // Hover handlers
        const handleEnter = () => {
            enterAnimation.play();
        };

        const handleLeave = () => {
            leaveAnimation.play();
        };

        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);

        // Cleanup
        return () => {
            card.removeEventListener("mouseenter", handleEnter);
            card.removeEventListener("mouseleave", handleLeave);
            enterAnimation.kill();
            leaveAnimation.kill();
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="relative rounded-[20px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)] group"
        >
            {/* Image Container */}
            <div className="aspect-[4/5] relative overflow-hidden bg-[#F8F8F8]">
                <img
                    ref={imageRef}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-0"
                />
            </div>

            {/* Content Container - Overlaid */}
            <div className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-[#2D3B36] text-sm">{title}</h3>
                    <p className="text-gray-500 text-xs">FROM ${price}</p>
                </div>
                <button
                    onClick={onClick}
                    className="w-7 h-7 rounded bg-white/80 flex items-center justify-center hover:bg-[#2D3B36] transition-colors group-hover:bg-[#2D3B36]"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5 group-hover:text-white"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z"
                            fill="#2D3B36"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Card;
