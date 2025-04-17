import teamBg from "@/assets/img/team/team-bg.jpg";

export default function TeamBannerSection() {
    return (
        <div className="team-area section-padding pt-0 pb-100">
            <div className="container">
                <div className="row align-items-center mt-30">
                    <div className="col-xl-7 col-lg-7 order-2 order-xl-1">
                        <div className="team-bg-wrap">
                            <img src={teamBg.src} alt="Wood carving workshop"/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 order-1 order-xl-2">
                        <div className="team-content-wrapper">
                            <div className="section-title">
                                <h2>Master Woodcarvers</h2>
                            </div>
                            <h3>MWCarving is a collective of skilled <br/> artisans and master woodworkers</h3>
                            <p>With decades of experience in traditional and contemporary carving techniques. Each member brings unique expertise and artistic vision to our creations, ensuring exceptional quality and artistry in every piece we produce.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}