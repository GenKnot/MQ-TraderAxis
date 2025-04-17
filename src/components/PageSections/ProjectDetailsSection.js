"use client";

import { useEffect, useState } from "react";
import { woodCarvings } from "@/data/woodCarvings";
import Link from "next/link";

export default function ProjectDetailsSection() {
    const [carving, setCarving] = useState(null);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        // In a real application, you would get the ID from the URL
        // For this example, we'll just use the first carving
        const foundCarving = woodCarvings[0];
        setCarving(foundCarving);
        setActiveImage(foundCarving?.image);
    }, []);

    if (!carving) {
        return <div className="container mt-5 text-center">Loading...</div>;
    }

    return (
        <div className="carving-details-section section-padding pt-0">
            <div className="container">
                {/* Product Title & Breadcrumb */}
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="section-title">
                            <h1>{carving.title}</h1>
                            <h6>{carving.category}</h6>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="row gx-5">
                    {/* Product Images */}
                    <div className="col-lg-7">
                        <div className="carving-main-image mb-4">
                            <img
                                src={activeImage?.src}
                                alt={carving.title}
                                className="img-fluid rounded shadow"
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="carving-thumbnails">
                            <div className="row">
                                {carving.gallery?.map((image, index) => (
                                    <div className="col-3 mb-3" key={index}>
                                        <img
                                            src={image.src}
                                            alt={`${carving.title} - View ${index + 1}`}
                                            className={`img-fluid rounded cursor-pointer ${activeImage === image ? 'active-thumbnail' : ''}`}
                                            style={{
                                                cursor: 'pointer',
                                                border: activeImage === image ? '2px solid #333' : '2px solid transparent'
                                            }}
                                            onClick={() => setActiveImage(image)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="col-lg-5">
                        <div className="carving-info-card">
                            <div className="carving-price mb-4">
                                <h2>${carving.price}</h2>
                                {!carving.inStock && (
                                    <span className="sold-out-badge">Sold Out</span>
                                )}
                            </div>

                            <div className="carving-description mb-4">
                                <h5>Description</h5>
                                <p>{carving.description}</p>
                            </div>

                            <div className="carving-specs mb-4">
                                <h5>Specifications</h5>
                                <ul className="specs-list">
                                    <li>
                                        <span className="spec-label">Material:</span>
                                        <span className="spec-value">{carving.material}</span>
                                    </li>
                                    <li>
                                        <span className="spec-label">Dimensions:</span>
                                        <span className="spec-value">{carving.dimensions}</span>
                                    </li>
                                    <li>
                                        <span className="spec-label">Category:</span>
                                        <span className="spec-value">{carving.category}</span>
                                    </li>
                                    <li>
                                        <span className="spec-label">Availability:</span>
                                        <span className="spec-value">{carving.inStock ? 'In Stock' : 'Sold Out'}</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="carving-care mb-4">
                                <h5>Care Instructions</h5>
                                <p>Keep away from direct sunlight and extreme temperature changes. Dust regularly with a soft cloth, and apply wood wax once or twice a year to maintain the luster.</p>
                            </div>

                            <div className="carving-actions mt-5">
                                {carving.inStock ? (
                                    <Link href="/contact" className="theme-btn w-100 text-center mb-3">
                                        Inquire About This Piece
                                    </Link>
                                ) : (
                                    <Link href="/contact" className="theme-btn w-100 text-center mb-3">
                                        Commission Similar Piece
                                    </Link>
                                )}

                                <Link href="/projects" className="secondary-btn w-100 text-center">
                                    View More Carvings
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="row mt-5">
                    <div className="col-12">
                        <h3>The MWCarving Difference</h3>
                        <hr />
                    </div>

                    <div className="col-md-4 mt-4">
                        <div className="feature-box text-center p-4">
                            <i className="las la-award fs-1 mb-3"></i>
                            <h5>Master Craftsmanship</h5>
                            <p>Each piece is meticulously handcrafted by experienced artisans with generations of woodworking expertise.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <div className="feature-box text-center p-4">
                            <i className="las la-leaf fs-1 mb-3"></i>
                            <h5>Premium Materials</h5>
                            <p>We use only the finest sustainably sourced hardwoods to ensure beauty and longevity in every carving.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <div className="feature-box text-center p-4">
                            <i className="las la-certificate fs-1 mb-3"></i>
                            <h5>Lifetime Guarantee</h5>
                            <p>Our confidence in our quality is backed by a lifetime guarantee against craftsmanship defects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}