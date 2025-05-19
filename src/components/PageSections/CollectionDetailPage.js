"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import TestimonialSectionFour from "@/components/PageSections/TestimonialSectionFour";
import { fetchProductDetails } from "@/utils/api-utils";
import Link from "next/link";

export default function CollectionDetailPage() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeImage, setActiveImage] = useState(null);

    const params = useParams();
    const id = params?.id;

    useEffect(() => {
        async function loadProductDetails() {
            if (!id) {
                setError("No product ID provided");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const data = await fetchProductDetails(id);

                if (data) {
                    setProduct(data);
                    // 优先使用完整URL，fallback到相对路径
                    setActiveImage(data.main_image_url || data.main_image);
                } else {
                    setError("Product not found");
                }
            } catch (err) {
                console.error("Error loading product details:", err);
                setError("Failed to load product details");
            } finally {
                setLoading(false);
            }
        }

        loadProductDetails();
    }, [id]);

    // Dynamic breadcrumb based on product data
    const breadcrumbMenus = [
        { label: "Collections", to: "/collections" },
        { label: product ? product.title : "Details", to: "" },
    ];

    if (loading) {
        return (
            <>
                <Breadcrumb menus={breadcrumbMenus} />
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-3">Loading product details...</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if (error || !product) {
        return (
            <>
                <Breadcrumb menus={breadcrumbMenus} />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="alert alert-warning text-center py-4" role="alert">
                                {error || "Product details not available"}
                            </div>
                            <div className="text-center mt-4">
                                <Link href="/collections" className="theme-btn">
                                    Browse Collections
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <NewsletterSection />
            </>
        );
    }

    // 构建画廊图片数组 - 使用完整URL
    const galleryImages = [
        // 主图
        {
            url: product.main_image_url || product.main_image,
            alt: `${product.title} - Main Image`
        },
        // 画廊图片
        ...(product.gallery_images?.map((img, index) => ({
            url: img.image_url || img.image,
            alt: `${product.title} - Gallery Image ${index + 1}`
        })) || [])
    ].filter(img => img.url); // 过滤掉空的图片

    return (
        <>
            <div className="carving-details-section section-padding pt-0">
                <div className="container">
                    {/* Product Title */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="section-title">
                                <h1>{product.title}</h1>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="row gx-5">
                        {/* Product Images */}
                        <div className="col-lg-7">
                            <div className="carving-main-image mb-4">
                                {activeImage ? (
                                    <img
                                        src={activeImage}
                                        alt={product.title}
                                        className="img-fluid rounded shadow"
                                        onError={(e) => {
                                            console.error('Failed to load image:', activeImage);
                                            e.target.onerror = null;
                                            // 尝试设置为第一个可用的图片
                                            if (galleryImages.length > 0) {
                                                const fallbackImage = galleryImages.find(img => img.url !== activeImage);
                                                if (fallbackImage) {
                                                    setActiveImage(fallbackImage.url);
                                                }
                                            }
                                            // 最后的备用方案：使用占位符
                                            e.target.src = "/assets/img/placeholder.jpg";
                                        }}
                                    />
                                ) : (
                                    <div className="placeholder-image d-flex align-items-center justify-content-center bg-light rounded"
                                         style={{minHeight: '400px'}}>
                                        <p className="text-muted">No image available</p>
                                    </div>
                                )}
                            </div>

                            {/* Thumbnail Gallery */}
                            {galleryImages.length > 1 && (
                                <div className="carving-thumbnails">
                                    <div className="row">
                                        {galleryImages.map((image, index) => (
                                            <div className="col-3 mb-3" key={index}>
                                                <img
                                                    src={image.url}
                                                    alt={image.alt}
                                                    className={`img-fluid rounded cursor-pointer ${activeImage === image.url ? 'active-thumbnail' : ''}`}
                                                    style={{
                                                        cursor: 'pointer',
                                                        border: activeImage === image.url ? '2px solid #333' : '2px solid transparent',
                                                        height: '100px',
                                                        objectFit: 'cover',
                                                        width: '100%'
                                                    }}
                                                    onClick={() => setActiveImage(image.url)}
                                                    onError={(e) => {
                                                        console.error('Failed to load thumbnail:', image.url);
                                                        e.target.onerror = null;
                                                        e.target.src = "/assets/img/placeholder.jpg";
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="col-lg-5">
                            <div className="carving-info-card">
                                <div className="carving-price mb-4">
                                    <h2>${parseFloat(product.price).toLocaleString()}</h2>
                                    {!product.in_stock && (
                                        <span className="sold-out-badge">Sold Out</span>
                                    )}
                                </div>

                                <div className="carving-description mb-4">
                                    <h5>Description</h5>
                                    <p>{product.description}</p>
                                </div>

                                <div className="carving-specs mb-4">
                                    <h5>Specifications</h5>
                                    <ul className="specs-list">
                                        <li>
                                            <span className="spec-label">Material:</span>
                                            <span className="spec-value">{product.material}</span>
                                        </li>
                                        <li>
                                            <span className="spec-label">Dimensions:</span>
                                            <span className="spec-value">{product.dimensions}</span>
                                        </li>
                                        <li>
                                            <span className="spec-label">Category:</span>
                                            <span className="spec-value">{product.category_name}</span>
                                        </li>
                                        <li>
                                            <span className="spec-label">Availability:</span>
                                            <span className="spec-value">{product.in_stock ? 'In Stock' : 'Sold Out'}</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="carving-care mb-4">
                                    <h5>Care Instructions</h5>
                                    <p>Keep away from direct sunlight and extreme temperature changes. Dust regularly with a soft cloth, and apply wood wax once or twice a year to maintain the luster.</p>
                                </div>

                                <div className="carving-actions mt-5">
                                    {product.in_stock ? (
                                        <Link href="/contact" className="theme-btn w-100 text-center mb-3">
                                            Inquire About This Piece
                                        </Link>
                                    ) : (
                                        <Link href="/contact" className="theme-btn w-100 text-center mb-3">
                                            Commission Similar Piece
                                        </Link>
                                    )}

                                    <Link href="/collections" className="secondary-btn w-100 text-center">
                                        View More Collections
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="row mt-5">
                        <div className="col-12">
                            <h3>The M&Q TraderAxis Difference</h3>
                            <hr />
                        </div>

                        <div className="col-md-4 mt-4">
                            <div className="feature-box text-center p-4">
                                <i className="las la-award fs-1 mb-3"></i>
                                <h5>Master Craftsmanship</h5>
                                <p>Each piece is meticulously handcrafted by experienced artisans with generations of expertise.</p>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4">
                            <div className="feature-box text-center p-4">
                                <i className="las la-leaf fs-1 mb-3"></i>
                                <h5>Premium Materials</h5>
                                <p>We use only the finest sustainably sourced materials to ensure beauty and longevity in every piece.</p>
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
        </>
    );
}