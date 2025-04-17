"use client";

import Link from "next/link";
import ctaSketchImage from "@/assets/img/cta-sketch.png"

export default function CtaSectionTwo() {
    return (
        <div className="cta-area-two gray-bg" style={{ backgroundImage: `url(${ctaSketchImage.src})`}}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title">
                            <h2>Interested in seeing <br/> more of our <br/> work? <span><i
                                className="las la-arrow-right"></i></span></h2>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="cta-content">
                            <p>Explore our <Link href="/projects">portfolio</Link> to see examples of our projects and get
                                inspired for your own space.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}