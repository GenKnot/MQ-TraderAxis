import Breadcrumb from "@/components/Breadcrumb";
import HeroSectionProjects from "@/components/PageSections/HeroSectionProjects";
import ServiceSectionSix from "@/components/PageSections/ServiceSectionSix";
import ProjectSectionThree from "@/components/PageSections/ProjectSectionThree";
import ClientSection from "@/components/PageSections/ClientSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";

const menus = [
    { label: "Blog", to: "" },
];

export default function Projects() {
    return(
        <>
            {/*breadcrumb*/}
            <Breadcrumb menus={menus}/>

            {/*Hero Area*/}
            <HeroSectionProjects />

            {/*Service Section*/}
            <ServiceSectionSix />

            {/*Project Section*/}
            <ProjectSectionThree />

            {/*Client Section*/}
            <ClientSection customClass={'pt-0'} />

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}