// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// style
import '@/assets/css/line-awesome.min.css'
import '@/assets/css/fontAwesomePro.css'
import '@/assets/css/animate.css'
import '@/assets/css/slick.css'
import '@/assets/css/backToTop.css'
import '@/assets/scss/style.scss';

import Preloader from '@/components/Preloader.js';
import MouseCursor from "@/components/MouseCursor";
import Header from "@/components/Header";
import SearchDropdown from "@/components/SearchDropdown";
import OffCanvas from "@/components/OffCanvas";
import FooterBottomAreaSection from "@/components/PageSections/FooterBottomAreaSection";
import FooterAreaSection from "@/components/PageSections/FooterAreaSection";
import Script from "next/script";
import WowProvider from "@/components/WowProvider";
import {AppWrapper} from "@/context";
import BackToTop from "@/components/BackToTop";

export const metadata = {
    title: "MWCarving | Exquisite Wood Carving Art Gallery",
    description: "MWCarving offers handcrafted wooden sculptures and carvings with exceptional artistry and quality craftsmanship.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        {/* Initializes WOW.js globally */}
        <WowProvider/>

        {/*preloader*/}
        <Preloader/>

        {/*Mouse Cursor*/}
        <MouseCursor/>
        <div id="smooth-wrapper">
            <AppWrapper>
                <Header/>
                <div id="smooth-content">
                    <div>
                        {children}
                    </div>

                    {/*Footer Area*/}
                    <FooterAreaSection/>

                    {/*Footer Bottom Area*/}
                    <FooterBottomAreaSection/>
                </div>
            </AppWrapper>
        </div>

        {/*Search Dropdown Area*/}
        <SearchDropdown/>

        {/*Off-canvas Area*/}
        <OffCanvas/>
        <div className="offcanvas-overlay"></div>

        {/*back to top start*/}
        <BackToTop />

        <Script src="/assets/js/popper.min.js"></Script>
        <Script src="/assets/js/bootstrap.min.js"></Script>
        {/*GSAP Animation JS*/}
        <Script src="/assets/js/gsap.min.js"></Script>
        <Script src="/assets/js/gsap-scroll-to-plugin.js"></Script>
        <Script src="/assets/js/SplitText.min.js"></Script>
        <Script src="/assets/js/ScrollSmoother.min.js"></Script>
        <Script src="/assets/js/ScrollTrigger.min.js"></Script>
        <Script src="/assets/js/smoother-script.js"></Script>
        <Script src="/assets/js/heading-animation.js"></Script>
        <Script src="/assets/js/paragraph-animation.js"></Script>
        </body>
        </html>
    );
}
