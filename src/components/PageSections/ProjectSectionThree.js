"use client";

import React, {useState, useEffect} from 'react';
import Link from "next/link";
import WoodCarvingCard from "@/components/WoodCarvingCard";
import {fetchCategories, fetchAllCarvings, fetchCarvingsByCategory} from "@/utils/api-utils";

export default function ProjectSectionThree() {
    const [activeTab, setActiveTab] = useState("all");
    const [categories, setCategories] = useState([]);
    const [allCarvings, setAllCarvings] = useState([]);
    const [filteredCarvings, setFilteredCarvings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadInitialData() {
            try {
                setLoading(true);

                const categoriesData = await fetchCategories();
                if (categoriesData) {
                    const allCategoriesOption = [{id: "all", name: "All Collections", slug: "all"}];
                    setCategories([...allCategoriesOption, ...categoriesData]);
                }

                const carvingsData = await fetchAllCarvings();
                if (carvingsData) {
                    setAllCarvings(carvingsData);
                    setFilteredCarvings(carvingsData);
                }
            } catch (err) {
                console.error("Error loading data:", err);
                setError("Failed to load collection data");
            } finally {
                setLoading(false);
            }
        }

        loadInitialData();
    }, []);

    useEffect(() => {
        async function filterCarvings() {
            try {
                setLoading(true);

                if (activeTab === "all") {
                    setFilteredCarvings(allCarvings);
                } else {
                    const categoryData = await fetchCarvingsByCategory(activeTab);
                    if (categoryData) {
                        setFilteredCarvings(categoryData);
                    } else {
                        const filtered = allCarvings.filter(carving => {
                            const category = categories.find(cat => cat.id === carving.category);
                            return category && category.slug === activeTab;
                        });
                        setFilteredCarvings(filtered);
                    }
                }
            } catch (err) {
                console.error("Error filtering carvings:", err);
                setError("Failed to filter collection");
            } finally {
                setLoading(false);
            }
        }

        if (categories.length > 0 && allCarvings.length > 0) {
            filterCarvings();
        }
    }, [activeTab, categories.length > 0]);

    const renderLoadingState = () => (
        <div className="row">
            <div className="col-12 text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading our collections...</p>
            </div>
        </div>
    );

    const renderErrorState = () => (
        <div className="row">
            <div className="col-12">
                <div className="alert alert-warning text-center py-4" role="alert">
                    {error || "No collection data available"}
                </div>
            </div>
        </div>
    );

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
                            Browse our diverse collection of handcrafted artworks. In addition to our exquisite wood
                            carvings and art pieces,
                            we also specialize in small parts processing and precision parts manufacturing. We welcome
                            custom orders and can
                            create bespoke solutions tailored to your specific requirements.
                        </p>
                    </div>
                </div>

                {categories.length > 0 && (
                    <div className="row">
                        <nav>
                            <div className="nav project-list d-flex flex-wrap" role="tablist">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        className={`nav-link ${activeTab === category.slug ? 'active' : ''}`}
                                        id={`${category.slug}-tab`}
                                        type="button"
                                        role="tab"
                                        aria-controls={category.slug}
                                        aria-selected={activeTab === category.slug}
                                        onClick={() => setActiveTab(category.slug)}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    </div>
                )}

                <div className="tab-content mt-5" id="nav-tabContent">
                    {loading ? (
                        renderLoadingState()
                    ) : error ? (
                        renderErrorState()
                    ) : (
                        <div className="row wood-carvings-grid">
                            {filteredCarvings.length > 0 ? (
                                filteredCarvings.map(carving => (
                                    <div className="col-xl-6 col-lg-6 col-md-12 mb-4" key={carving.id}>
                                        <WoodCarvingCard carving={{
                                            id: carving.id,
                                            title: carving.title,
                                            category: carving.category_name,
                                            description: carving.description,
                                            material: carving.material,
                                            dimensions: carving.dimensions,
                                            price: parseFloat(carving.price),
                                            inStock: carving.in_stock,
                                            image: carving.main_image,
                                            gallery: carving.gallery_images?.map(img => img.image) || []
                                        }}/>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center mt-4">
                                    <p>No carvings found in this category. Check back soon for new additions!</p>
                                </div>
                            )}
                        </div>
                    )}

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
    );
}