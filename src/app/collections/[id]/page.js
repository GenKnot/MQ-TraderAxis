import Breadcrumb from "@/components/Breadcrumb";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import TestimonialSectionFour from "@/components/PageSections/TestimonialSectionFour";
import ProjectDetailsSection from "@/components/PageSections/ProjectDetailsSection";

const menus = [
    { label: "Projects", to: "/projects" },
    { label: "Details", to: "" },
];

export default function ProjectsShow() {
    return(
        <>
            {/*breadcrumb*/}
            <Breadcrumb menus={menus}/>

            {/*Project Details*/}
            <ProjectDetailsSection />

            {/*Testimonial Section*/}
            <TestimonialSectionFour />

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}