import FaqContent from "@/components/FaqContent";
import faqBg from "@/assets/img/faq-bg.jpg"

export default function FaqSection() {
    return (
        <div className="faq-section section-padding" style={{backgroundImage: `url(${faqBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>FAQ</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="cp-custom-accordion">
                            <FaqContent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}