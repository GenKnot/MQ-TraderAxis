import Image from "next/image";
import testimonialBg from "@/assets/img/testimonial-1.jpg";
import TestimonialOneSlider from "@/components/TestimonialOneSlider";

export default function TestimonialSection({ customClass }) {
    return (
        <div className={`testimonial-section section-padding ${customClass}`}>
            <div className="container">
                <div className="row">
                    <div className="offset-xl-6 col-xl-6 offset-lg-6 col-lg-6">
                        <div className="section-title text-end">
                            <div className="heading-animation">
                                <h2>What Our Clients <br/> <span><i className="las la-arrow-down"></i></span> Are Saying
                                </h2>
                            </div>
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
                            <Image src={testimonialBg} alt="" style={{height: 'auto', borderRadius: '10px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}