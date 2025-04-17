"use client";

import {chooseUsData} from "@/data/client";

export default function WhyChooseUsSection() {
    return (
        <div className="why-choose-us-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3">
                        <div className="section-title">
                            <h2>Why Choose MWC?</h2>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-8 offset-lg-1 col-lg-8">
                        {chooseUsData.map((item, index) => (
                            <div className="single-choose-item" key={item.id}>
                                <div className="single-choose-inner">
                                    <h5><span>{String(index + 1).padStart(2, '0')}</span>{item.title}</h5>
                                </div>
                                <div className="choose-img">
                                    <img src={item.image} alt={item.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}