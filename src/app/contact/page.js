import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/PageSections/ContactSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";

const menus = [
    { label: "Contact", to: "" },
];

export default function Contact() {
    return (
        <>
            {/*breadcrumb*/}
            <Breadcrumb menus={menus}/>

            {/*Contact Section*/}
            <ContactSection />

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}