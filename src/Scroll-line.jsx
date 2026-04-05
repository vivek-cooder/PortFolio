import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Scrolline.css'


// Register plugin outside the component to prevent re-registration on every render
gsap.registerPlugin(ScrollTrigger);

export default function ScrollLine() {
    const pathRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;

        // Check if path exists to avoid errors
        if (path) {
            const pathLength = path.getTotalLength();

            // 1. Initialize the path as "undrawn"
            gsap.set(path, {
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
            });

            // 2. Create the scroll animation
            gsap.to(path, {
                strokeDashoffset: 0,
                ease: "none", // Critical for smooth scroll syncing
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top left", // Animation starts when top of container hits center of screen
                    end: "bottom right", // Ends when bottom hits center
                    scrub: 1, // Smoothly catches up to the scroll position
                },
            });
        }


        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div
            ref={containerRef}

        >


            <svg
                 
                viewBox="1000 500"
                style={{ width: '100%', overflow: 'visible' }}
            >
                <path
                    ref={pathRef}
                    d="M-500,950 C100,300 100,10 550,150"
                    fill="none"
                    stroke="#d4f043"
                    strokeWidth="50"
                    strokeLinecap="round"
                />
            </svg>
        </div >
    );
}