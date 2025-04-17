import Breadcrumb from "@/components/Breadcrumb";
import HeroSectionPricePlan from "@/components/PageSections/HeroSectionPricePlan";
import PricingSection from "@/components/PageSections/PricingSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";

const menus = [
    { label: "Pricing Plan", to: "" },
];

export default function Price() {
    return (
        <>
            {/*breadcrumb*/}
            <Breadcrumb menus={menus}/>

            {/*Hero Area*/}
            <HeroSectionPricePlan />

            {/*Pricing Section*/}
            <PricingSection />

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}