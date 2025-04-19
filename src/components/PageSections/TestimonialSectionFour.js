import TestimonialOneSlider from "@/components/TestimonialOneSlider";
import testimonialBg from "@/assets/img/testimonial-1.jpg";
export default function TestimonialSectionFour() {

    return (
        <div className="testimonial-section section-padding pt-0">
            <div className="container">
                <div className="row mt-50">
                    <div className="col-xl-7 col-lg-7">
                        <TestimonialOneSlider />
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="testimonial-bg-wrapper">
                            <img src={testimonialBg.src} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
