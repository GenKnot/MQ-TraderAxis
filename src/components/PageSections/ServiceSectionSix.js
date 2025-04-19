import serviceBg from "@/assets/img/service/service-bg-1.jpg";
import {servicesSix} from "@/data/serviceData";

export default function ServiceSectionSix() {
    return (
        <div className="service-section service-two section-padding pb-50">
            <div className="container">
                <div className="row justify-content-center text-end">
                    <div className="section-title">
                        <h2>Carving Categories</h2>
                    </div>
                </div>

                <div className="row mt-30">
                    {/* Accordion Section */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="cp-custom-accordion">
                            <div className="accordions" id="accordionExample">
                                {servicesSix.map((service, index) => (
                                    <div key={service.id} className="accordion-items">
                                        <h2 className="accordion-header" id={`heading${service.id}`}>
                                            <button
                                                className={`accordion-buttons ${index === 0 ? '' : 'collapsed'}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${service.id}`}
                                                aria-expanded={index === 0 ? "true" : "false"}
                                                aria-controls={`collapse${service.id}`}
                                            >
                                                <span>{String(service.id).padStart(2, '0')}</span>
                                                {service.title}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${service.id}`}
                                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                            aria-labelledby={`heading${service.id}`}
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                {service.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Service Image Section */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="service-bg-wrap">
                            <img src={serviceBg.src} alt="Wood carving showcase" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}