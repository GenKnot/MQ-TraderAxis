import Breadcrumb from "@/components/Breadcrumb";
import HeroAboutPageSection from "@/components/PageSections/HeroAboutPageSection";
import HistorySection from "@/components/PageSections/HistorySection";
import ServiceSectionFour from "@/components/PageSections/ServiceSectionFour";
import WhyChooseUsSection from "@/components/PageSections/WhyChooseUsSection";
import CounterSection from "@/components/PageSections/CounterSection";
import TeamSectionTwo from "@/components/PageSections/TeamSectionTwo";
import AwardSection from "@/components/PageSections/AwardSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";

const menus = [
    { label: "About", to: "" },
];

export const metadata = {
    title: "About Us - MWCarving | Exquisite Wood Carving Art Gallery",
    description: "About Us - MWCarving offers handcrafted wooden sculptures and carvings with exceptional artistry and quality craftsmanship.",
};

export default function About() {
    return (
        <>
            {/*breadcrumb*/}
            <Breadcrumb menus={menus}/>

            {/*Hero Area*/}
            <HeroAboutPageSection />

            {/*Service Section*/}
            <ServiceSectionFour />

            {/*Why Choose Us Section*/}
            <WhyChooseUsSection />

            {/*Counter Section*/}
            <CounterSection customClass={'pt-0 pb-50'}/>

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}