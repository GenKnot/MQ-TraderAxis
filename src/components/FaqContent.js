// FAQ data array
import { faqData } from "@/data/faq"

export default function FaqContent() {
    return (
        <div className="accordions" id="accordionExample">
            {faqData.map((faq, index) => (
                <div key={faq.id} className="accordion-items">
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                        <button
                            className={`accordion-buttons ${index === 0 ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${faq.id}`}
                            aria-expanded={index === 0 ? 'true' : 'false'}
                            aria-controls={`collapse${faq.id}`}
                        >
                            <span>{String(faq.id).padStart(2, '0')}</span>{faq.question}
                        </button>
                    </h2>
                    <div
                        id={`collapse${faq.id}`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        aria-labelledby={`heading${faq.id}`}
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}