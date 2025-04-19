import featureImage from "@/assets/img/project/project-feature-img-5.jpg";

export default function HeroSectionProjects() {
    return (
        <div id="project_page" className="hero-area">
            <div className="container">
                <div className="row hero-area-inner">
                    <div className="col-xl-9 col-lg-9">
                        <div className="hero-area-content">
                            <div className="section-title">
                                <h1>Discover Our<br/></h1>
                                <h1>Wood Carving</h1>
                                <h1 className="pl-200">Masterpieces</h1>
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