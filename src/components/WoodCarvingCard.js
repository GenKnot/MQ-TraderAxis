"use client";

import Link from "next/link";

export default function WoodCarvingCard({ carving }) {
    return (
        <div className="wood-carving-card">
            <div className="carving-image">
                <img src={carving.image.src} alt={carving.title} className="img-fluid" />
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
                        <span>Price:</span> ${carving.price}
                    </div>
                </div>
                <Link href={`/collections/${carving.id}`} className="carving-details-btn">
                    View Details <i className="las la-arrow-right"></i>
                </Link>
            </div>
        </div>
    );
}