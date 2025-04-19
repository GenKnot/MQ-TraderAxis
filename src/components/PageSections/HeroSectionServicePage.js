import featureImage1 from "@/assets/img/service/service-feature-img-6.jpg";
import featureImage2 from "@/assets/img/service/service-feature-img-7.jpg";

export default function HeroSectionServicePage() {
    return (
        <div id="service_page" className="hero-area mt-30">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-4 d-none d-md-block order-2 order-lg-1">
                        <img src={featureImage1.src} alt="Wood carving process"/>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-8 order-1 order-lg-2">
                        <div className="hero-area-content">
                            <div className="section-title">
                                <span className="meta">Since 2000 <br/>Master Woodcarving</span>
                                <h1 className="first_line">Exceptional</h1>
                                <h1 className="second_line">Craftsmanship</h1>
                                <h1 className="third_line"><i>/</i> from MWCarving</h1>
                            </div>
                        </div>
                        <div className="row align-items-end">
                            <div className="col-xl-5 col-lg-5 col-md-6">
                                <img src={featureImage2.src} alt="Wood carving detail"/>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-6 d-none d-md-block text-end">
                                <div className="section-title mb-0">
                                    <span><i className="las la-arrow-down mt-30"></i></span>
                                    <h3>MWCarving</h3>
                                    <p>Artistry in Wood</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}