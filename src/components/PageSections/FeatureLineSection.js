"use client";

import Slider from "react-slick";
import featureBg2 from "@/assets/img/feature-bg-2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeatureLineSection() {
    const settings = {
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        dots: false, // `buttons: false` equivalent in react-slick
    };

    return (
        <div className="feature_wrap" style={{ backgroundImage: `url(${featureBg2.src})` }}>
            <Slider {...settings} className="feature_item d-flex">
                <div><h5>Construction Project</h5></div>
                <div><h5>Interior Design</h5></div>
                <div><h5>Concept Drawings</h5></div>
                <div><h5>Building Venture</h5></div>
            </Slider>
        </div>
    );
}
