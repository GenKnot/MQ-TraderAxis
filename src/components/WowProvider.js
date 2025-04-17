"use client"; // Ensures it runs only on the client

import { useEffect } from "react";
import dynamic from "next/dynamic";
import "animate.css"; // Required for animations

const WowProvider = () => {
    useEffect(() => {
        // Dynamically import WOW.js only in the browser
        import("wow.js").then((module) => {
            const WOW = module.default;
            new WOW().init();
        });
    }, []);

    return null; // No UI, just initialization
};

export default dynamic(() => Promise.resolve(WowProvider), { ssr: false });
