import ServiceAccordions from "@/components/ServiceAccordions";

export default function ServiceSectionFour() {
    return (
        <div id="service-3" className="service-section section-padding pt-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 text-end">
                        <div className="section-title">
                            <h2>Our Specialties</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="cp-custom-accordion">
                            <ServiceAccordions />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}