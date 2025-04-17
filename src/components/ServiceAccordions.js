"use client";

import {servicesAccordions} from "@/data/serviceData";

export default function ServiceAccordions() {
    return (
        <div className="accordions" id="accordionExample">
            {servicesAccordions.map((service, index) => (
                <div className="accordion-items" key={service.id}>
                    <h2 className="accordion-header" id={`heading${service.id}`}>
                        <button
                            className={`accordion-buttons ${index === 0 ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${service.id}`}
                            aria-expanded={index === 0 ? 'true' : 'false'}
                            aria-controls={`collapse${service.id}`}
                        >
                            <span>{service.id.toString().padStart(2, '0')}</span>
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
                            <img src={service.image.src} alt={service.title}/>
                            <p>{service.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}