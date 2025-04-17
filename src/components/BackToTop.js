"use client";

import {useEffect, useRef, useState} from "react";

export default function BackToTop() {
    const progressRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const path = progressRef.current;
        const pathLength = path.getTotalLength();

        // Set initial stroke properties
        path.style.strokeDasharray = `${pathLength} ${pathLength}`;
        path.style.strokeDashoffset = pathLength;

        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scrollTop * pathLength) / scrollHeight;
            path.style.strokeDashoffset = progress;

            setIsActive(scrollTop > 50);
        };

        // Attach scroll listener
        window.addEventListener("scroll", updateProgress);
        updateProgress(); // Initial call to set progress

        return () => {
            window.removeEventListener("scroll", updateProgress);
        };
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`progress-wrap ${isActive ? "active-progress" : ""}`} onClick={scrollToTop}>
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path
                    ref={progressRef}
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                />
            </svg>
        </div>
    )
}