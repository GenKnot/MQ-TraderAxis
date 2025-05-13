import Breadcrumb from "@/components/Breadcrumb";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import TestimonialSectionFour from "@/components/PageSections/TestimonialSectionFour";
import CollectionDetailPage from "@/components/PageSections/CollectionDetailPage";

const menus = [
    { label: "Collections", to: "/collections" },
    { label: "Details", to: "" },
];

export default function CollectionsShow() {
    return(
        <>
            {/*breadcrumb*/}
            <Breadcrumb menus={menus}/>

            {/*Project Details*/}
            <CollectionDetailPage />

            {/*Testimonial Section*/}
            <TestimonialSectionFour />

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}