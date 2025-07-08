import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import  Lenis  from "lenis";

const lenis = new Lenis();
lenis.on("scroll", (e) => {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const Header = () => {
    // Create refs for animated elements
    const logoRef = useRef(null);
    const navLinksRef = useRef(null);
    const rightIconsRef = useRef(null);

    useEffect(() => {
        // Set initial states
        gsap.set(logoRef.current, {
            autoAlpha: 0,
            x: -50,
            scale: 0.8,
        });

        gsap.set(navLinksRef.current.children, {
            autoAlpha: 0,
            y: -20,
            scale: 0.9,
        });

        gsap.set(rightIconsRef.current.children, {
            autoAlpha: 0,
            x: 30,
            scale: 0.9,
        });

        // Create animation timeline
        const tl = gsap.timeline({
            delay: 0.2,
            defaults: { ease: "power4.out" },
        });

        // Animate logo
        tl.to(logoRef.current, {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 1,
        });

        // Animate navigation links
        tl.to(
            navLinksRef.current.children,
            {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
            },
            "-=0.5"
        );

        // Animate right side icons
        tl.to(
            rightIconsRef.current.children,
            {
                autoAlpha: 1,
                x: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
            },
            "-=0.6"
        );
    }, []);

    return (
        <header className="w-full py-6 px-8 flex justify-between items-center">
            {/* Logo - Left Side */}
            <h1
                ref={logoRef}
                className="text-3xl font-bold text-[#2D3B36] tracking-tight opacity-0"
            >
                SKINCARE
            </h1>

            {/* Centered Navigation Links */}
            <nav
                ref={navLinksRef}
                className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 text-[#2D3B36] font-medium"
            >
                <a href="#" className="hover:text-blue-700 transition-colors opacity-0">
                    All Products
                </a>
                <a href="#" className="hover:text-blue-700 transition-colors opacity-0">
                    Serum
                </a>
                <a href="#" className="hover:text-blue-700 transition-colors opacity-0">
                    Sunscreen
                </a>
                <a href="#" className="hover:text-blue-700 transition-colors opacity-0">
                    Bundle
                </a>
            </nav>

            {/* Right Side Icons */}
            <div ref={rightIconsRef} className="flex gap-6 items-center">
                {/* Cart Section */}
                <a
                    href="#"
                    className="hover:text-blue-700 transition-colors flex items-center gap-2 opacity-0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#2D3B36"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                    </svg>
                </a>

                <a href="#" className="hover:text-blue-700 transition-colors opacity-0">
                    Cart (1)
                </a>

                {/* Heart Icon */}
                <a href="#" className="hover:text-blue-700 transition-colors opacity-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#2D3B36"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                </a>

                <a href="#" className="hover:text-blue-700 transition-colors opacity-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#2D3B36"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                    </svg>
                </a>
            </div>
        </header>
    );
};

export default Header;
