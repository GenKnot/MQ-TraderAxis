import teamBg from "@/assets/img/team/team-bg.jpg";

export default function TeamBannerSection() {
    return (
        <div className="team-area section-padding pt-0 pb-100">
            <div className="container">
                <div className="row align-items-center mt-30">
                    <div className="col-xl-7 col-lg-7 order-2 order-xl-1">
                        <div className="team-bg-wrap">
                            <img src={teamBg.src} alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 order-1 order-xl-2">
                        <div className="team-content-wrapper">
                            <div className="section-title">
                                <h2>Meet Our Professionals</h2>
                            </div>
                            <h3>Archipix is a team of experienced <br/> architects and interior designers</h3>
                            <p>Who are passionate about creating beautiful, functional spaces. We believe that good
                                design should be accessible to everyone, and we work hard to make sure that our clients
                                visions become a reality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}