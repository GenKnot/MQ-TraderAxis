"use client";

import { useState } from "react";
import { API_BASE_URL } from "@/../constants/api";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch(`${API_BASE_URL}/api/newsletter/subscribe/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRFToken': document.cookie.split('csrftoken=')[1]?.split(';')[0] || '',
                },
                credentials: 'include',
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const errorData = await response.text();
                console.error('API error response:', errorData);
                throw new Error(errorData || 'Something went wrong');
            }

            const data = await response.json();
            setStatus({ type: "success", message: data.message || "Thank you for subscribing!" });
            setEmail("");
        } catch (error) {
            console.error("Newsletter subscription error:", error);
            setStatus({ type: "error", message: "Network error. Please try again later." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="newsletter-section">
            <div className="container">
                <div className="row newsletter-inner gray-bg align-items-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>Stay Updated with <br/> M&Q TradeAxis <span><i
                                    className="las la-arrow-right"></i></span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="newsletter-content">
                            <p>Subscribe to our newsletter to receive updates on new collections, special offers, and woodcarving insights.</p>
                            <div className="subscribed-form">
                                {status.message && (
                                    <div className={`alert ${status.type === "success" ? "alert-success" : "alert-danger"} mb-3`}>
                                        {status.message}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <input
                                        style={{border: "1px solid black", borderRadius: "15px", width: "100%"}}
                                        type="email"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <input
                                        className="bordered-btn"
                                        type="submit"
                                        value={isSubmitting ? "Subscribing..." : "Subscribe"}
                                        disabled={isSubmitting}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}