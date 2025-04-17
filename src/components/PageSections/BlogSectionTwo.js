"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";

import "swiper/css";
import "swiper/css/navigation";

import {blogPostsTwo} from "@/data/blog";
import {useRef} from "react";

export default function BlogSectionTwo() {

    const swiperRef = useRef(null);

    return (
        <div className="blog-section section-padding pt-50 pb-50">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 text-center">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>Design Insight</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-40">
                    <div className="blog-carousel">
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            modules={[Navigation]}
                            loop={true}
                            autoplay={true}
                            spaceBetween={20}
                            slidesPerView={3}
                            breakpoints={{
                                1200: {slidesPerView: 3},
                                990: {slidesPerView: 2},
                                767: {slidesPerView: 2},
                                575: {slidesPerView: 1},
                                0: {slidesPerView: 1},
                            }}
                        >
                            {blogPostsTwo.map((post) => (
                                <SwiperSlide key={post.id} className="single-blog-item p-3">
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <p>{post.category}</p>
                                        </div>
                                        <h3>
                                            <Link href={`/blog/${post.id}`}>
                                                {parse(post.title)}
                                            </Link>
                                        </h3>
                                        <div className="blog-info">
                                            <div className="blog-author">
                                                <p>by {post.author}</p>
                                            </div>
                                            <div className="blog-date">
                                                <p>{post.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-bg">
                                        <Image src={post.image} alt={post.title} style={{height: "auto"}}/>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="owl-nav position-relative float-end">
                            <button type="button" role="presentation" className="owl-prev"
                                    onClick={() => swiperRef.current?.slidePrev()}
                            >
                                <i className="las la-arrow-left"></i>
                            </button>
                            <button type="button" role="presentation" className="owl-next"
                                    onClick={() => swiperRef.current?.slideNext()}
                            >
                                <i className="las la-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
