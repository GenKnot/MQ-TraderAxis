"use client";

import Link from "next/link";

export default function WoodCarvingCard({ carving }) {
    if (!carving) {
        return (
            <div className="wood-carving-card">
                <div className="alert alert-warning">Carving data unavailable</div>
            </div>
        );
    }

    const imageUrl = carving.main_image_url || carving.image || carving.main_image;

    return (
        <div className="wood-carving-card">
            <div className="carving-image">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={carving.title}
                        className="img-fluid"
                        onError={(e) => {
                            console.error('Failed to load image:', imageUrl);
                            e.target.onerror = null;
                            e.target.src = "/assets/img/placeholder.jpg"; // Fallback image path
                        }}
                    />
                ) : (
                    <div className="no-image-placeholder d-flex align-items-center justify-content-center bg-light"
                         style={{minHeight: '200px'}}>
                        <span className="text-muted">No image available</span>
                    </div>
                )}
                {carving.inStock === false && (
                    <span className="sold-out-badge">Sold Out</span>
                )}
            </div>
            <div className="carving-info">
                <h4>{carving.title}</h4>
                <p className="carving-category">{carving.category}</p>
                <p className="carving-description">{carving.description}</p>
                <div className="carving-details">
                    <div className="carving-material">
                        <span>Material:</span> {carving.material}
                    </div>
                    <div className="carving-dimensions">
                        <span>Dimensions:</span> {carving.dimensions}
                    </div>
                    <div className="carving-price">
                        <span>Price:</span> ${typeof carving.price === 'number' ? carving.price.toLocaleString() : carving.price}
                    </div>
                </div>
                <Link href={`/collections/${carving.id}`} className="carving-details-btn">
                    View Details <i className="las la-arrow-right"></i>
                </Link>
            </div>
        </div>
    );
}