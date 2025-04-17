import aboutImage from "@/assets/img/about/about-3.jpg";

export default function AboutSectionThree() {
    return (
        <div className="about-section section-padding pt-0">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-7 col-lg-7 col-md-6">
                        <div className="section-title">
                            <h2>About <br/> Archipix <span className="d-none d-md-block"><i
                                className="las la-arrow-down ml-40"></i></span></h2>
                        </div>
                        <div className="about-desc mt-60 pl-150">
                            <p>Archipix is a team of experienced architects and interior designers who are passionate
                                about creating beautiful, functional spaces. We believe that good design should be
                                accessible to everyone, and we work hard to make sure that our clients visions become a
                                reality.</p>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-4 offset-lg-1 col-lg-4 col-md-6 text-end">
                        <div className="about-img">
                            <img src={aboutImage.src} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}