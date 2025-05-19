import Image from "next/image";
import aboutImage from "@/assets/img/about/about-1.jpg";
import Link from "next/link";

export default function AboutSectionTwo() {
    return (
        <div className="about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-7 order-2 order-xl-1">
                        <div className="about-bg-wrap">
                            <Image src={aboutImage} alt="Wood carving workshop" style={{height: 'auto'}}/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 order-1 order-xl-2">
                        <div className="about-content-wrapper">
                            <div className="section-title">
                                <div className="heading-animation">
                                    <h2>About <span>/</span> <br/> M&Q TraderAxis</h2>
                                </div>
                            </div>
                            <div className="heading-animation">
                                <h3>M&Q TraderAxis is a team of dedicated <br/> master artisans creating exceptional works</h3>
                            </div>
                            <div className="p-animation">
                                <p>With decades of experience in traditional and contemporary techniques, we transform premium materials into breathtaking sculptures, precision metal parts, and functional art pieces that become family heirlooms and valuable collectibles.</p>
                            </div>
                            <Link href="/about" className="theme-btn mt-30">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}