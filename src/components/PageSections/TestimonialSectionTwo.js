import TestimonialTwoSlider from "@/components/TestimonialTwoSlider";

export default function TestimonialSectionTwo() {

    return (
        <div id="testimonial-2" className="testimonial-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>
                                    What Our Clients <br/> Are Saying
                                    <span><i className="las la-arrow-down"></i></span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-150">
                    <div className="col-xl-12">
                        <TestimonialTwoSlider />
                    </div>
                </div>
            </div>
        </div>
    );
}
