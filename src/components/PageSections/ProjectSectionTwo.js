"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {projectsTwoData} from "@/data/projects";

export default function ProjectSectionTwo() {
    const swiperRef = useRef(null);

    return (
        <div className="project-section section-padding pt-50 pb-50">
            <div className="container">
                {/* ✅ Section Title */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>Notable Projects</h2>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>

                {/* ✅ Swiper Slider */}
                <div className="row mt-30">
                    <div className="col-xl-12">
                        <div className="project-slider">
                            <Swiper
                                onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
                                modules={[Navigation, Autoplay]}
                                slidesPerView={2} // Default slides per view
                                spaceBetween={30}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    575: { slidesPerView: 1 },
                                    767: { slidesPerView: 1 },
                                    990: { slidesPerView: 2 },
                                    1200: { slidesPerView: 2 },
                                }}
                            >
                                {projectsTwoData.map((project) => (
                                    <SwiperSlide key={project.id}>
                                        <a href={project.link} className="single-project-wrapper">
                                            <div className="project-img">
                                                <img src={project.image.src} alt={project.title} />
                                            </div>
                                            <div className="project-title">
                                                <h3>{project.title}</h3>
                                                <h6>{project.category}</h6>
                                            </div>
                                        </a>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* ✅ Custom Next & Prev Buttons */}
                            <div className="owl-nav position-relative">
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
                    </div>
                </div>
            </div>
        </div>
    );
}
