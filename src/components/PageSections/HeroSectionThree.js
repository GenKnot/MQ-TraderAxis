import heroBanner from "@/assets/img/hero-area-banner.jpg";
import heroBanner2 from "@/assets/img/hero-banner-2.jpg";

export default function HeroSectionThree(){
    return (
        <div id="home-3" className="hero-area">
            <div className="container">
                <div className="row hero-area-inner">
                    <div className="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 wow fadeInUp animated"
                         data-wow-delay="200ms">
                        <div className="hero-area-content">
                            <div className="section-title">
                                <h1>Transform Wood into <br/> <span>Breathtaking Art</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-xl-7 col-lg-7 col-md-7">
                            <div className="hero-area-banner">
                                <img src={heroBanner.src} alt="Wood carving sculpture"/>
                                <p>[Sculpture]</p>
                            </div>
                        </div>
                        <div className="offset-xl-1 col-xl-4 offset-lg-1 col-lg-4 col-md-5">
                            <div className="hero-area-content">
                                <p>At M&Q TradeAxis, we are passionate about bringing wood to life through traditional craftsmanship. Our team of master woodcarvers transforms premium hardwoods into stunning sculptures and functional art pieces that showcase the natural beauty of the material enhanced by skilled hands.</p>
                            </div>
                            <div className="directon-sign">
                                <i className="las la-arrow-down"></i>
                            </div>
                            <div className="hero-area-banner mt-60">
                                <img src={heroBanner2.src} alt="Relief carving detail"/>
                                <p>[Relief]</p>
                            </div>
                        </div>
                        <div className="section-title mb-0">
                            <span><i className="las la-arrow-down mt-30"></i></span>
                            <h3>M&Q TradeAxis</h3>
                            <p>Exceptional Carving Art</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}