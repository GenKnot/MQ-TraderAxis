"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ENDPOINTS } from "@/../constants/api";

export default function ProjectSection() {
    const [showcaseItems, setShowcaseItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShowcaseItems = async () => {
            try {
                const response = await fetch(ENDPOINTS.SHOWCASE.LIST);
                if (!response.ok) {
                    throw new Error('Failed to fetch showcase items');
                }
                const data = await response.json();
                setShowcaseItems(data);
            } catch (err) {
                console.error('Error fetching showcase items:', err);
                setError('Failed to load showcase items');
            } finally {
                setLoading(false);
            }
        };

        fetchShowcaseItems();
    }, []);

    if (loading) {
        return (
            <div id="project-2" className="project-section section-padding pt-0 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>Loading showcase items...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div id="project-2" className="project-section section-padding pt-0 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="text-danger">{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id="project-2" className="project-section section-padding pt-0 pb-100">
            <div className="project-two-wrapper">
                <div className="row">
                    {showcaseItems.slice(0, 2).map((item) => (
                        <div key={item.id} className={item.layout}>
                            <Link href={`/collections?category=${item.category_slug}`} className="single-project-wrapper"
                                  style={{ backgroundImage: `url(${item.image_url || item.image})`, backgroundSize: "cover" }}>
                                <div className="project-info-inner d-flex">
                                    <div className="project-info">
                                        <h3>{item.title}</h3>
                                        <p>[{item.category_name}]</p>
                                    </div>
                                    <div className="project-details-link">
                                        <i className="las la-arrow-right"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="row mt-4">
                    {showcaseItems.slice(2).map((item) => (
                        <div key={item.id} className={item.layout}>
                            <Link href={`/collections?category=${item.category_slug}`} className="single-project-wrapper"
                                  style={{ backgroundImage: `url(${item.image_url || item.image})`, backgroundSize: "cover" }}>
                                <div className="project-info-inner">
                                    <div className="project-info">
                                        <h3>{item.title}</h3>
                                        <p>[{item.category_name}]</p>
                                    </div>
                                    <div className="project-details-link">
                                        <i className="las la-arrow-right"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
