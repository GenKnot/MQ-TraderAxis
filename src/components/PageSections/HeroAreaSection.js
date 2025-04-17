import Image from "next/image";
import headlineImg from "@/assets/img/headline-img.jpg";
import HomepageSlides from "@/components/HomepageSlider";

export default function HeroAreaSection() {
    return (
        <div id="home-2" className="hero-area">
            <div className="container">
                <div className="row align-items-center justify-content-center hero-area-inner">
                    <div
                        className="col-xl-10 col-lg-10 col-md-10 text-center wow fadeInUp animated"
                        data-wow-delay="200ms"
                    >
                        <div className="hero-area-content">
                            <div className="section-title mb-0">
                                <h1>
                                    Exquisite{" "}
                                    {/*<span>*/}
                                    {/*    <Image src={headlineImg} alt="" style={{ height: 'auto'}}/>*/}
                                    {/*</span>{" "}*/}
                                    Wood Carvings <br/> Handcrafted Perfection
                                </h1>
                                <div className="p-animation">
                                    <p>
                                        Our team of master woodcarvers creates unique, handcrafted artworks
                                        that bring natural beauty and artistic excellence <br/> to your home
                                        and collection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomepageSlides />
        </div>
    )
}