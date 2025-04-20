"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import WoodCarvingCard from "@/components/WoodCarvingCard";
import { woodCarvings, woodCarvingCategories } from "@/data/woodCarvings";

export default function ProjectSectionThree() {
    const [activeTab, setActiveTab] = useState("all");
    const [filteredCarvings, setFilteredCarvings] = useState([]);

    useEffect(() => {
        if (activeTab === "all") {
            setFilteredCarvings(woodCarvings);
        } else {
            setFilteredCarvings(
                woodCarvings.filter(carving =>
                    carving.category.toLowerCase().replace(/\s+/g, '-') === activeTab
                )
            );
        }
    }, [activeTab]);

    return (
        <div id="project-3" className="project-section section-padding pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Our Wood Carving Collections</h2>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <p>
                            Browse our diverse collection of handcrafted artworks. In addition to our exquisite wood carvings and art pieces, 
                            we also specialize in small parts processing and precision parts manufacturing. We welcome custom orders and can 
                            create bespoke solutions tailored to your specific requirements.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <nav>
                        <div className="nav project-list d-flex flex-wrap" role="tablist">
                            {woodCarvingCategories.map((category) => (
                                <button
                                    key={category.id}
                                    className={`nav-link ${activeTab === category.id ? 'active' : ''}`}
                                    id={`${category.id}-tab`}
                                    type="button"
                                    role="tab"
                                    aria-controls={category.id}
                                    aria-selected={activeTab === category.id}
                                    onClick={() => setActiveTab(category.id)}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </nav>

                    <div className="tab-content mt-5" id="nav-tabContent">
                        <div className="row wood-carvings-grid">
                            {filteredCarvings.length > 0 ? (
                                filteredCarvings.map(carving => (
                                    <div className="col-xl-6 col-lg-6 col-md-12 mb-4" key={carving.id}>
                                        <WoodCarvingCard carving={carving} />
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center mt-4">
                                    <p>No carvings found in this category. Check back soon for new additions!</p>
                                </div>
                            )}
                        </div>

                        <div className="row mt-5 justify-content-center">
                            <div className="col-lg-8 text-center">
                                <p className="mb-5">
                                    Browse our gallery of handcrafted wooden masterpieces. Each piece is meticulously
                                    carved by our master artisans, bringing out the natural beauty of premium hardwoods
                                    while showcasing exceptional craftsmanship.
                                </p>
                                <Link href="/contact" className="theme-btn">Inquire About Custom Orders</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}