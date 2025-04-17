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
                            <Image src={aboutImage} alt="" style={{height: 'auto'}}/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 order-1 order-xl-2">
                        <div className="about-content-wrapper">
                            <div className="section-title">
                                <div className="heading-animation">
                                    <h2>About <span>/</span> <br/> Archipix</h2>
                                </div>
                            </div>
                            <div className="heading-animation">
                                <h3>Archipix is a team of experienced <br/> architects and interior designers</h3>
                            </div>
                            <div className="p-animation">
                                <p>who are passionate about creating beautiful, functional spaces. We believe that good
                                    design should be accessible to everyone, and we work hard to make sure that our
                                    clients visions become a reality.</p>
                            </div>
                            <Link href="/about" className="theme-btn mt-30">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}