import ServiceTwoContent from "@/components/ServiceTwoContent";

export default function ServiceSectionFive() {
    return (
        <div className="service-section section-padding pt-100">
            <div className="container">
                <div className="row justify-content-center text-end">
                    <div className="section-title">
                        <h2>Our Services</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <ServiceTwoContent />
                    </div>
                </div>
            </div>
        </div>
    )
}