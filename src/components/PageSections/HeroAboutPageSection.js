import featureImage from "@/assets/img/about/about-feature-1.jpg";

export default function HeroAboutPageSection() {
    return (
        <div id="about_page" className="hero-area">
            <div className="container">
                <div className="row hero-area-inner">
                    <div className="col-xl-9 col-lg-9">
                        <div className="hero-area-content">
                            <div className="section-title">
                                <h1>Our Story<i>/</i> <br/></h1>
                                <h1 className="pl-150">Carving Heritage</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 d-none d-lg-block text-lg-end">
                        <h4>Our Journey</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="about-feature-img">
                        <img src={featureImage.src} alt="Wooden sculpture workshop"/>
                    </div>
                </div>
                <div className="row mt-30">
                    <p>MWCarving was founded in 2010 by Muta, a third-generation woodcarver with a passion for transforming wood into art. What began as a small studio in Beijing has grown into a renowned wood sculpture gallery and workshop.</p>
                    <p>Our team combines traditional woodcarving techniques passed down through generations with modern design sensibilities. We are dedicated to preserving the ancient craft of woodcarving while pushing the boundaries of artistic expression through this timeless medium.</p>
                    <p>Today, MWCarving pieces can be found in private collections, corporate headquarters, and galleries across North America, Europe, and Asia.</p>
                </div>
            </div>
        </div>
    )
}