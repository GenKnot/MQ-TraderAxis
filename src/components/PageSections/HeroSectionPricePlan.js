import priceFeat1 from "@/assets/img/price-feat-1.jpg";
import priceFeat2 from "@/assets/img/price-feat-2.jpg";

export default function HeroSectionPricePlan() {
    return (
        <div id="price_page" className="hero-area">
            <div className="container">
                <div className="row hero-area-inner align-items-end">
                    <div className="col-xl-9 col-lg-9">
                        <div className="hero-area-content">
                            <div className="section-title">
                                <h1>Affordable Pricing for<br/></h1>
                                <h1>Exceptional Design <br/></h1>
                                <h1>Services</h1>
                            </div>
                            <p>Our pricing is designed to provide exceptional value to our clients while ensuring that
                                our team is able to deliver the highest quality design services. We offer competitive
                                rate for all of our services, including architectural design, interior design, project
                                management, historical preservation, landscape design and furniture design. Our price is
                                based on variety of factors, including the scope of project, the level of customization
                                required, and the timeline of completion. </p>
                        </div>
                        <div className="price-feat-img mt-60">
                            <img src={priceFeat1.src} alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                        <div className="price-feat-im">
                            <img src={priceFeat2.src} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}