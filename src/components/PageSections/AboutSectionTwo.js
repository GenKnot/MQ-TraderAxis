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
                                    <h2>About <span>/</span> <br/> MWCarving</h2>
                                </div>
                            </div>
                            <div className="heading-animation">
                                <h3>MWCarving is a team of dedicated <br/> master woodcarvers creating exceptional art</h3>
                            </div>
                            <div className="p-animation">
                                <p>With decades of experience in traditional and contemporary woodcarving techniques, we transform premium hardwoods into breathtaking sculptures, reliefs, and functional art pieces that become family heirlooms and valuable collectibles.</p>
                            </div>
                            <Link href="/about" className="theme-btn mt-30">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}