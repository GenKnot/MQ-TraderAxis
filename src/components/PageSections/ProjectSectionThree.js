"use client";

import React, {useState, useEffect} from 'react';
import Link from "next/link";
import WoodCarvingCard from "@/components/WoodCarvingCard";
import {fetchCategories, fetchAllProducts, fetchProductsByCategory} from "@/utils/api-utils";

export default function ProjectSectionThree() {
    const [activeTab, setActiveTab] = useState("all");
    const [categories, setCategories] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
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

                const productsData = await fetchAllProducts();
                if (productsData) {
                    setAllProducts(productsData);
                    setFilteredProducts(productsData);
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
        async function filterProducts() {
            try {
                setLoading(true);

                if (activeTab === "all") {
                    setFilteredProducts(allProducts);
                } else {
                    const categoryData = await fetchProductsByCategory(activeTab);
                    if (categoryData) {
                        setFilteredProducts(categoryData);
                    } else {
                        const filtered = allProducts.filter(product => {
                            const category = categories.find(cat => cat.id === product.category);
                            return category && category.slug === activeTab;
                        });
                        setFilteredProducts(filtered);
                    }
                }
            } catch (err) {
                console.error("Error filtering products:", err);
                setError("Failed to filter collection");
            } finally {
                setLoading(false);
            }
        }

        if (categories.length > 0 && allProducts.length > 0) {
            filterProducts();
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
                        <h2>Our Collections</h2>
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
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <div className="col-xl-6 col-lg-6 col-md-12 mb-4" key={product.id}>
                                        <WoodCarvingCard carving={{
                                            id: product.id,
                                            title: product.title,
                                            category: product.category_name,
                                            description: product.description,
                                            material: product.material,
                                            dimensions: product.dimensions,
                                            price: parseFloat(product.price),
                                            inStock: product.in_stock,
                                            image: product.main_image,
                                            gallery: product.gallery_images?.map(img => img.image) || []
                                        }}/>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center mt-4">
                                    <p>No products found in this category. Check back soon for new additions!</p>
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