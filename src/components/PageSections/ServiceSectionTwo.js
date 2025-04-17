import ServiceTwoContent from "@/components/ServiceTwoContent";

export default function ServiceSectionTwo() {
    return (
        <div className="service-section section-padding pt-50 pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="section-title">
                        <div className="heading-animation">
                            <h3>Our Services</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <ServiceTwoContent />
                    </div>
                </div>
            </div>
        </div>
    );
}
