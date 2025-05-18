"use client";

import {useState, useEffect} from "react";
import {fetchFaqs} from "@/utils/api-utils";

export default function FaqContent() {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadFaqs() {
            try {
                setLoading(true);
                const data = await fetchFaqs();
                if (data) {
                    const sortedFaqs = data.sort((a, b) => a.order - b.order);
                    setFaqs(sortedFaqs);
                }
            } catch (err) {
                console.error("Error loading FAQs:", err);
                setError("Failed to load FAQ content");
            } finally {
                setLoading(false);
            }
        }

        loadFaqs();
    }, []);

    if (loading) {
        return (
            <div className="loading-container text-center py-4">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error || !faqs || faqs.length === 0) {
        return (
            <div className="alert alert-warning text-center py-4" role="alert">
                {error || "No FAQ content available"}
            </div>
        );
    }

    return (
        <div className="accordions" id="accordionExample">
            {faqs.map((faq, index) => (
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
    );
}