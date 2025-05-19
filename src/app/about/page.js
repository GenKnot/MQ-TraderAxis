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
    title: "About Us - M&Q TradeAxis | Art & Precision Manufacturing",
    description: "About Us - M&Q TradeAxis offers exceptional art pieces and precision manufacturing services with uncompromising quality and craftsmanship.",
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