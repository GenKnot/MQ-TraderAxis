import contactBg from "@/assets/img/contact-bg.jpg";

export default function ContactSection() {
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
                            <p>Interested in acquiring a masterpiece for your collection or commissioning a custom wood carving? We're here to help! Fill out the contact form or reach out directly via phone or email. Our team will respond within 24 hours to discuss your interests, answer questions about our work, or arrange a studio visit to see our craftsmanship in person.</p>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6">
                        <div className="subimit-form-wrap">
                            <div className="section-title">
                                <h2>Get In Touch <span><i className="las la-arrow-right"></i></span></h2>
                            </div>
                            <form action="#">
                                <input type="text" placeholder="Your Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="tel" placeholder="Phone Number"/>
                                <textarea name="message" cols="30" rows="10" placeholder="Tell us about your interest"></textarea>
                                <input type="submit" value="Submit"/>
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
                                        <h4>info@mwcarving.com</h4>
                                    </div>
                                    <div className="single-contact-info">
                                        <p>Phone</p>
                                        <h4>(503) 555-7890</h4>
                                    </div>
                                    <div className="single-contact-info">
                                        <p>Workshop Address</p>
                                        <h4>123 Street Way, Suite 200, Beijing</h4>
                                    </div>
                                    {/*<div className="social-area">*/}
                                    {/*    <a href="#"><i className="fab fa-facebook-f"></i></a>*/}
                                    {/*    <a href="#"><i className="fab fa-instagram"></i></a>*/}
                                    {/*    <a href="#"><i className="fab fa-pinterest"></i></a>*/}
                                    {/*    <a href="#"><i className="fab fa-youtube"></i></a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}