export default function ProcessSection({ customClass }) {
    return (
        <div className={`process-section bg-cover section-padding ${customClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>Our Crafting Process</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 mt-30">
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="200ms">
                        <div className="single-process-item">
                            <div className="process-num">
                                <h2>01<i className="las la-arrow-right"></i></h2>
                            </div>
                            <h4>Wood Selection</h4>
                            <p>We begin by carefully selecting premium hardwoods, considering grain pattern, color, and character. Each piece of wood is chosen to perfectly complement the intended design while ensuring longevity and beauty.</p>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 col-lg-4 offset-xl-0 offset-lg-0 offset-md-6 col-md-6 wow fadeInUp animated"
                        data-wow-delay="400ms">
                        <div className="single-process-item">
                            <div className="process-num">
                                <h2>02<i className="las la-arrow-right"></i></h2>
                            </div>
                            <h4>Design & Sketching</h4>
                            <p>Our master carvers create detailed sketches and models, working closely with clients on custom pieces. This stage establishes the artistic direction and technical approach for each unique carving.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="600ms">
                        <div className="single-process-item">
                            <div className="process-num">
                                <h2>03<i className="las la-arrow-right"></i></h2>
                            </div>
                            <h4>Initial Carving</h4>
                            <p>Using traditional tools and techniques, our artisans begin the rough carving process, establishing the basic forms and volumes. This foundational stage sets the structural integrity for the detailed work to follow.</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-0">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="process-bg">
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="200ms">
                        <div className="single-process-item">
                            <div className="process-num">
                                <h2>04<i className="las la-arrow-right"></i></h2>
                            </div>
                            <h4>Detail Work</h4>
                            <p>This meticulous phase brings the piece to life as artisans carefully carve intricate details, textures, and finishing touches. Every curve and line is refined to achieve artistic excellence and visual impact.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="400ms">
                        <div className="single-process-item">
                            <div className="process-num">
                                <h2>05<i className="las la-arrow-right"></i></h2>
                            </div>
                            <h4>Finishing & Sealing</h4>
                            <p>The completed carving receives multiple rounds of hand sanding before being finished with natural oils, waxes, or fine lacquers that protect the wood while enhancing its natural beauty and ensuring generations of enjoyment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}