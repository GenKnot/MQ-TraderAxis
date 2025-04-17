"use client"

import { useEffect, useState } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900); // 400ms delay + 500ms fadeOut

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    return (
        loading && (
            <div className="preloader" style={{ transition: 'opacity 0.5s', opacity: loading ? 1 : 0 }}>
                <div className="spinner">
                    <div className="double-bounce1" />
                    <div className="double-bounce2" />
                </div>
            </div>
        )
    );
}
