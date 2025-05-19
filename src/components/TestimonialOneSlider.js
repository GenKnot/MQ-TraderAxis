"use client";

import Image from "next/image";
import straightQuotes from "@/assets/img/straight-quotes.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import { API_BASE_URL } from '@/../constants/api';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialOneSlider() {
    const swiperRef = useRef(null);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/testimonials/`);
            if (!response.ok) {
                throw new Error('Failed to fetch testimonials');
            }
            const data = await response.json();
            setTestimonials(data);
        } catch (err) {
            setError(err.message);
            console.error('Error fetching testimonials:', err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading testimonials...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="testimonial-wrapper position-relative">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={5}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="single-testimonial-item">
                            <div className="quote-icon">
                                <Image src={straightQuotes} alt="" />
                            </div>
                            <div className="testimonial-content">
                                <p>{testimonial.content}</p>
                            </div>
                            <div className="testimonial-author">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                                />
                                <h6 className="text-black">
                                    {testimonial.author} <span>{testimonial.location}</span>
                                </h6>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

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