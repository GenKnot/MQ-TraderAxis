import {serviceTwoContent} from "@/data/serviceData";

export default function ServiceTwoContent() {
    return (
        <>
            {serviceTwoContent.map((service, index) => (
                <div key={service.id} className="single-service-item mt-30">
                    <div className="single-service-inner">
                        <h5>
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            {service.title}
                        </h5>
                        <div className="details-link">
                            <i className="las la-arrow-right"></i>
                        </div>
                    </div>
                    <div className="service-img">
                        <img src={service.image.src} alt={service.title} />
                    </div>
                </div>
            ))}
        </>
    )
}