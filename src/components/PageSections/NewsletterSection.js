export default function NewsletterSection() {
    return (
        <div className="newsletter-section">
            <div className="container">
                <div className="row newsletter-inner gray-bg align-items-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>Stay Updated with <br/> MWCarving <span><i
                                    className="las la-arrow-right"></i></span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="newsletter-content">
                            <p>Subscribe to our newsletter to receive updates on new collections, special offers, and woodcarving insights.</p>
                            <div className="subscribed-form">
                                <form>
                                    <input type="text" placeholder="Your Email"/>
                                    <input className="bordered-btn" type="submit" value="Subscribe"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}