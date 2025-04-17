import faqFeatImage from "@/assets/img/faq-feat-img.jpg";
import FaqContent from "@/components/FaqContent";

export default function FaqSectionTwo() {
    return (
        <div className="faq-section bg-cover section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center mt-60">
                    <div className="col-xl-12">
                        <img src={faqFeatImage.src} alt="FAQ Feature" />
                    </div>
                    <div className="col-xl-12 col-lg-12 mt-100 text-center">
                        <div className="section-title">
                            <h2>Frequently Asked Questions</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-30">
                    <div className="col-xl-8 col-lg-8">
                        <div className="cp-custom-accordion">
                            <FaqContent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
