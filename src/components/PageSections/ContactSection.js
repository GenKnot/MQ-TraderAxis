"use client";

import { useState } from "react";
import contactBg from "@/assets/img/contact-bg.jpg";
import { submitContactForm } from "@/utils/api-utils";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState({
        success: false,
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSubmitting(true);

            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                setSubmitResult({
                    success: false,
                    message: "Please fill out all required fields"
                });
                return;
            }

            // 调用API提交表单
            const response = await submitContactForm(formData);

            if (response.success) {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });

                setSubmitResult({
                    success: true,
                    message: "Thank you for your message!"
                });
            } else {
                setSubmitResult({
                    success: false,
                    message: response.message || "There was an error submitting your form. Please try again."
                });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitResult({
                success: false,
                message: "There was a problem connecting to our server. Please try again later."
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="contact-section section-padding pt-0">
            <div className="container">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title mt-20">
                        <h1>Contact Us <span><i className="las la-arrow-right"></i></span></h1>
                    </div>
                </div>
                <div className="row justify-content-center mt-60">
                    <div className="col-xl-12">
                        <img src={contactBg.src} alt=""/>
                    </div>
                </div>
                <div className="row mt-60">
                    <div className="col-xl-5 col-lg-5">
                        <div className="contact-text">
                            <p>Interested in acquiring a masterpiece for your collection or commissioning a custom wood carving? We're here to help! Fill out the contact form or reach out directly via phone or email. Our team will respond within 12 hours to discuss your interests, answer questions about our work, or arrange a studio visit to see our craftsmanship in person.</p>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6">
                        <div className="subimit-form-wrap">
                            <div className="section-title">
                                <h2>Get In Touch <span><i className="las la-arrow-right"></i></span></h2>
                            </div>


                            {submitResult.message && (
                                <div className={`alert ${submitResult.success ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                                    {submitResult.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <textarea
                                    name="message"
                                    cols="30"
                                    rows="10"
                                    placeholder="Tell us about your interest"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>

                                <input
                                    type="submit"
                                    value={submitting ? 'Submitting...' : 'Submit'}
                                    disabled={submitting}
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contact-info-wrap">
                    <div className="row mt-60">
                        <div className="col-xl-6">
                            <div className="google-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=montreal"
                                    width="600" height="600" style={{ border: 0}} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-info">
                                <div className="section-title">
                                    <h2>Studio Location <span><i className="las la-arrow-right"></i></span></h2>
                                </div>
                                <div className="contact-info-inner">
                                    <div className="single-contact-info">
                                        <p>Email</p>
                                        <h4>zz119020@proton.me</h4>
                                    </div>
                                    <div className="single-contact-info">
                                        <p>Phone</p>
                                        <h4>9176672791</h4>
                                    </div>
                                    <div className="single-contact-info">
                                        <p>Workshop Address</p>
                                        <h4>123 Street Way, Suite 200, Beijing</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}