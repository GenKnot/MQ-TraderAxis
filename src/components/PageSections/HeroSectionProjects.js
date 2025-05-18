import featureImage from "@/assets/img/project/project-feature-img-5.jpg";

export default function HeroSectionProjects() {
    return (
        <div id="project_page" className="hero-area">
            <div className="container">
                <div className="row hero-area-inner">
                    <div className="col-xl-9 col-lg-9">
                        <div className="hero-area-content">
                            <div className="section-title">
                                <h2>Discover Our Diverse Range of Art & Manufacturing Excellence</h2>
                                <p>Explore our curated collections of functional art, abstract pieces, and precision-engineered products. From artistic masterpieces to custom metal parts, each piece reflects our commitment to excellence in both artistry and manufacturing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 text-end">
                        <div className="service-info">
                            <p>Since 2000</p>
                            <h4>Nature Sculptures</h4>
                            <h4>Animal Carvings</h4>
                            <h4>Functional Art</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-feature-img">
                <img src={featureImage.src} alt=""/>
            </div>
        </div>
    )
}