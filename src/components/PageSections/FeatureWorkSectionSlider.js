"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import asteriskDark from "@/assets/img/asterisk-dark.png"

export default function FeatureWorkSectionSlider() {

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
        dots: false, // Equivalent to `buttons: false` in jQuery Slick
    };

    return (
        <div className="funfacts_line dark-bg-1">
            <Slider {...settings} className="funfacts_item d-flex">
                <h5 className="d-flex"><img src={asteriskDark.src} alt=""  className="me-3 img-fluid"/> Our Feature Work</h5>
                <h5 className="d-flex stroke"><img src={asteriskDark.src} alt="" className="me-3 img-fluid" /> Our Feature Work</h5>
            </Slider>
        </div>
    )
}