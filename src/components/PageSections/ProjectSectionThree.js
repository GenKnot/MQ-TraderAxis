"use client";

import React, {useState} from 'react';
import Link from "next/link";

export default function ProjectSectionThree() {

    const categories = [
        {id: 'all-works', label: 'All Works'},
        {id: 'nature-sculptures', label: 'Nature Sculptures'},
        {id: 'animal-carvings', label: 'Animal Carvings'},
        {id: 'functional-art', label: 'Functional Art'}
    ];

    const [activeTab, setActiveTab] = useState(categories[0].id);

    return (
        <div id="project-3" className="project-section section-padding pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Our Wood Carving Collections</h2>
                    </div>
                </div>
                <div className="row">

                    <nav>
                        <div className="nav project-list" role="tablist">
                            {categories.map((category) => (
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
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h3 className="mb-4">Discover Our Exquisite Woodcarving Collection</h3>
                                <p className="mb-5">
                                    Browse our gallery of handcrafted wooden masterpieces. Each piece is meticulously
                                    carved by our master artisans,
                                    bringing out the natural beauty of premium hardwoods while showcasing exceptional
                                    craftsmanship.
                                </p>
                                <Link href="/projects" className="theme-btn">View Full Gallery</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}