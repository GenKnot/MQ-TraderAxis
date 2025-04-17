"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {testimonialsTwoData} from "@/data/slider";

export default function TestimonialTwoSlider() {
    const swiperRef = useRef(null);

    return (
        <div className="testimonial-carousel">
            {/* ✅ Swiper Component with Navigation */}
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1} // Default slides per view
                spaceBetween={50}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    575: { slidesPerView: 1 },
                    767: { slidesPerView: 2 },
                    990: { slidesPerView: 3, loop: true },
                    1200: { slidesPerView: 3, loop: true },
                }}
            >
                {testimonialsTwoData.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="single-testimonial-item mt-60">
                            <div className="testimonial-img">
                                <img src={testimonial.image.src} alt={testimonial.name} />
                            </div>
                            <p>“{testimonial.review}”</p>
                            <div className="separator"></div>
                            <div className="testimonial-author">
                                <h6>{testimonial.name}</h6>
                                <p>{testimonial.position}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ✅ Fixed Next & Prev Buttons */}
            <div className="owl-nav position-relative">
                <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                    onClick={() => swiperRef.current?.slidePrev()} // Correct React event
                >
                    <i className="las la-arrow-left"></i>
                </button>
                <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                    onClick={() => swiperRef.current?.slideNext()} // Correct React event
                >
                    <i className="las la-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}
