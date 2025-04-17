import HeroAreaSection from "@/components/PageSections/HeroAreaSection";
import ClientSection from "@/components/PageSections/ClientSection";
import AboutAreaSection from "@/components/PageSections/AboutAreaSection";
import CounterSection from "@/components/PageSections/CounterSection";
import ServiceSection from "@/components/PageSections/ServiceSection";
import ProcessSection from "@/components/PageSections/ProcessSection";
import TestimonialSection from "@/components/PageSections/TestimonialSection";
import CtaAreaSection from "@/components/PageSections/CtaAreaSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import ProjectSection from "@/components/PageSections/ProjectSection";

export default function Home() {
    return (
        <>
            {/*Hero Area*/}
            <HeroAreaSection/>

            {/*About Area*/}
            <AboutAreaSection/>

            {/*Featured Collections*/}
            <ProjectSection/>

            {/*Craftsmanship Process*/}
            <ProcessSection customClass={'pt-0 pb-40'}/>

            {/*Woodcarving Categories*/}
            <ServiceSection/>

            {/*Counter Section*/}
            <CounterSection customClass={'pt-50 pb-50'}/>

            {/*Client Testimonials*/}
            <TestimonialSection customClass={'pt-0'}/>

            {/*Call to Action*/}
            <CtaAreaSection/>

            {/*Newsletter Section*/}
            <NewsletterSection/>
        </>
    );
}