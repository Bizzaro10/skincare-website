import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loading = ({ onComplete }) => {
    const containerRef = useRef(null);
    const counterRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });

        // Counter animation from 0 to 100
        const counter = { value: 0 };

        tl.to(counter, {
            value: 100,
            duration: 2.5,
            ease: "power2.out",
            onUpdate: () => {
                if (counterRef.current) {
                    counterRef.current.textContent = Math.floor(counter.value);
                }
            }
        })
            // Fade out animation
            .to(overlayRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut"
            }, "+=0.5")
            // Scale up and fade out the entire container
            .to(containerRef.current, {
                scale: 1.1,
                opacity: 0,
                duration: 0.6,
                ease: "power2.inOut"
            }, "-=0.4");

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 bg-p2 flex items-center justify-center"
        >
            {/* Main overlay */}
            <div ref={overlayRef} className="absolute inset-0 bg-p2">
                {/* Counter */}
                <div className="absolute bottom-8 right-8">
          <span
              ref={counterRef}
              className="text-7xl font-inter text-p1 tracking-wider"
          >
            0
          </span>
                </div>
            </div>
        </div>
    );
};

export default Loading;