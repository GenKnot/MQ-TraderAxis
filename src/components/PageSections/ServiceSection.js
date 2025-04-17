import Image from "next/image";

import {servicesAccordions} from "@/data/serviceData";

export default function ServiceSection() {
    return (
        <div className="service-section section-padding pt-50">
            <div className="container">
                <div className="row">
                    {/* Tabs Section */}
                    <div className="col-xl-6 col-lg-6 col-md-8">
                        <div className="services-tab-wrapper">
                            <div className="section-title">
                                <div className="heading-animation">
                                    <h2>Our Services</h2>
                                </div>
                            </div>
                            <div className="services-tabs mt-100">
                                <ul className="nav nav-tabs" role="tablist">
                                    {servicesAccordions.map((service, index) => (
                                        <li role="presentation" key={service.id}>
                                            <a
                                                href={`#${service.tabId}`}
                                                className={index === 0 ? "active" : ""}
                                                data-bs-toggle="tab"
                                                role="tab"
                                                aria-controls={service.tabId}
                                                aria-selected={index === 0 ? "true" : "false"}
                                            >
                                                {service.title}
                                                <span className="number">{service.number}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Tab Content Section */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="tab-content services-content">
                            {servicesAccordions.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`tab-pane services-content-item fade ${index === 0 ? "active show" : ""}`}
                                    id={service.tabId}
                                    role="tabpanel"
                                >
                                    <div className="services-text">
                                        <div className="services-text-container">
                                            <h4 className="services-title">{service.title}</h4>
                                            <p className="text-gray mb-0">{service.description}</p>
                                        </div>
                                    </div>
                                    <Image
                                        className="services-image"
                                        src={service.image}
                                        alt=""
                                        style={{ height: 'auto' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
