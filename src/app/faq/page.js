import Breadcrumb from "@/components/Breadcrumb";
import FaqSectionTwo from "@/components/PageSections/FaqSectionTwo";
import NewsletterSection from "@/components/PageSections/NewsletterSection";

const menus = [
    { label: "FAQs", to: "" },
];

export default function Faq() {
    return (
        <>
            {/*breadcrumb*/}
            <Breadcrumb menus={menus}/>

            {/*FAQ Section*/}
            <FaqSectionTwo />

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}