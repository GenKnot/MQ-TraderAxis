import Image from "next/image";
import offCanvasImg from "@/assets/img/offcanvas-1.jpg"
import Link from "next/link";

export default function OffCanvas() {
    return (
        <div className="extra-info">
            <div className="close-icon menu-close">
                <button>
                    <i className="las la-times"></i>
                </button>
            </div>
            <div className="logo-side mb-30">
                <div className="logo">
                    <Link href="/" className="logo">MWCarving</Link>
                </div>
            </div>
            <div className="side-info">
                <div className="contact-list mb-40">
                    <p>Welcome to MWCarving, where exceptional wood carving artistry meets timeless craftsmanship. Our gallery showcases unique handcrafted wooden sculptures and functional art pieces, each meticulously created by master woodcarvers.</p>
                    <Image src={offCanvasImg} alt="Wood carving in process" style={{ height: 'auto'}}/>

                    <div className="mt-30 mb-30">
                        <Link href="/contact" className="white-btn">Get In Touch</Link>
                    </div>
                </div>
                {/*<div className="social-area-wrap">*/}
                {/*    <a href="#"><i className="lab la-facebook-f"></i></a>*/}
                {/*    <a href="#"><i className="lab la-instagram"></i></a>*/}
                {/*    <a href="#"><i className="lab la-pinterest"></i></a>*/}
                {/*    <a href="#"><i className="lab la-youtube"></i></a>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}