"use client";

import Image from "next/image";
import straightQuotes from "@/assets/img/straight-quotes.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {useRef} from "react";
import {testimonialOneData} from "@/data/slider";

export default function TestimonialOneSlider() {
    const swiperRef = useRef(null);

    return (
        <div className="testimonial-wrapper position-relative">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay, Pagination, Navigation]} // Enable required modules
                slidesPerView={1} // Number of slides per view
                spaceBetween={5} // Space between slides
                loop={true} // Enable infinite loop
                autoplay={{
                    delay: 3000, // Autoplay delay in milliseconds
                    disableOnInteraction: false, // Continue autoplay after user interaction
                }}
            >
                {testimonialOneData.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="single-testimonial-item">
                            <div className="quote-icon">
                                <Image src={straightQuotes} alt="" />
                            </div>
                            <div className="testimonial-content">
                                <p>{testimonial.content}</p>
                            </div>
                            <div className="testimonial-author">
                                <Image src={testimonial.image} alt={testimonial.author} />
                                <h6 className="text-black">
                                    {testimonial.author} <span>{testimonial.location}</span>
                                </h6>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ✅ Fixed Next & Prev Buttons */}
            <div className="owl-nav z-9999">
                <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <i className="las la-arrow-left"></i>
                </button>
                <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <i className="las la-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}