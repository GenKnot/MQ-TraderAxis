import Image from "next/image";
import featureImage from "@/assets/img/feature-bg.jpg";

export default function FeatureSection(){
    return (
        <div className="feature-area gray-bg section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>Our <br/> Values <br/> <span><i className="las la-arrow-down mt-20"></i></span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="feature-bg-wrap">
                            <Image src={featureImage} alt="" style={{height: 'auto'}}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-4">
                        <div className="single-feature-item">
                            <div className="feature-icon">
                                <i className="las la-arrow-right"></i>
                            </div>
                            <h4>Design for Sustainability</h4>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 mt-150">
                        <div className="single-feature-item">
                            <div className="feature-icon">
                                <i className="las la-arrow-right"></i>
                            </div>
                            <h4>Honesty & Integrity</h4>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4">
                        <div className="single-feature-item">
                            <div className="feature-icon">
                                <i className="las la-arrow-right"></i>
                            </div>
                            <h4>Innovative Design</h4>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 mt-150">
                        <div className="single-feature-item">
                            <div className="feature-icon">
                                <i className="las la-arrow-right"></i>
                            </div>
                            <h4>Attention to Details</h4>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4">
                        <div className="single-feature-item">
                            <div className="feature-icon">
                                <i className="las la-arrow-right"></i>
                            </div>
                            <h4>Experienced Team</h4>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 mt-150">
                        <div className="single-feature-item">
                            <div className="feature-icon">
                                <i className="las la-arrow-right"></i>
                            </div>
                            <h4>Quality Craftsmanship</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}