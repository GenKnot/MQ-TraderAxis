import Breadcrumb from "@/components/Breadcrumb";
import HeroBlogSection from "@/components/PageSections/HeroBlogSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";

const menus = [
    { label: "Blog", to: "" },
];

export default function Blog() {
    return (
        <>
            {/*breadcrumb*/}
            <Breadcrumb menus={menus}/>

            {/*Hero Area*/}
            <HeroBlogSection />

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}