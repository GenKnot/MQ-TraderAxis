import testimonialBg from "@/assets/img/testimonial-bg.jpg";
import TestimonialOneSlider from "@/components/TestimonialOneSlider";

export default function TestimonialSectionThree() {
    return (
        <div className="testimonial-section section-padding pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-title mb-0 text-md-end">
                            <h3><i className="las la-arrow-down d-none d-md-block"></i> What Our Clients Are Saying</h3>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row mt-50">
                    <div className="col-xl-7 col-lg-7">
                        <TestimonialOneSlider />
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="testimonial-bg-wrapper d-none d-md-block">
                            <img src={testimonialBg.src} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}