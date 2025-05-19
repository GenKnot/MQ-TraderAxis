import Link from "next/link";

export default function HeroSectionTwo() {
    return (
        <div id="home-1" className="hero-area">
            <div className="hero-area-banner">
                <div className="hero-area-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="section-title">
                                    <div className="heading-animation">
                                        <h1>Bringing Beauty to Life <br/> Through Craftsmanship</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 text-md-end">
                                <div className="service-info">
                                    <div className="heading-animation">
                                        <p>Since 2000</p>
                                        <h4>Wood Sculptures</h4>
                                        <h4>Metal Products</h4>
                                        <h4>Custom Parts</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-xl-5 col-xl-7 offset-md-4 col-md-6 text-lg-end">
                                <div className="p-animation">
                                    <p>Welcome to M&Q TradeAxis, where master artisans transform premium materials into breathtaking sculptures and precision-engineered products. From artistic masterpieces to custom metal parts, each piece showcases our commitment to excellence in both artistry and manufacturing.</p>
                                </div>
                                <Link href="/contact" className="theme-btn mt-20">Commission a Piece</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}