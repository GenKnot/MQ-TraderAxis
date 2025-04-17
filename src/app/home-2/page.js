import HeroSectionTwo from "@/components/PageSections/HeroSectionTwo";
import AboutSectionTwo from "@/components/PageSections/AboutSectionTwo";
import FeatureSection from "@/components/PageSections/FeatureSection";
import CounterSection from "@/components/PageSections/CounterSection";
import ServiceSectionTwo from "@/components/PageSections/ServiceSectionTwo";
import ProjectSectionTwo from "@/components/PageSections/ProjectSectionTwo";
import ProcessSectionTwo from "@/components/PageSections/ProcessSectionTwo";
import AwardSection from "@/components/PageSections/AwardSection";
import TestimonialSectionTwo from "@/components/PageSections/TestimonialSectionTwo";
import FeatureLineSection from "@/components/PageSections/FeatureLineSection";
import FaqSection from "@/components/PageSections/FaqSection";
import BlogSectionTwo from "@/components/PageSections/BlogSectionTwo";
import ClientSection from "@/components/PageSections/ClientSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";

export default function HomeTwo() {
    return (
        <>
            {/* Hero Area*/}
            <HeroSectionTwo />

            {/*About Area*/}
            <AboutSectionTwo />

            {/*Feature Area*/}
            <FeatureSection />

            {/*Counter Section*/}
            <CounterSection customClass={'pt-100 pb-50'}/>

            {/*Service Section*/}
            <ServiceSectionTwo />

            {/*Project Section*/}
            <ProjectSectionTwo />

            {/*Process Section*/}
            <ProcessSectionTwo />

            {/*Award Section*/}
            <AwardSection />

            {/*Testimonial Section*/}
            <TestimonialSectionTwo />

            {/*Feature Line*/}
            <FeatureLineSection />

            {/*FAQ Section*/}
            <FaqSection />

            {/*Blog Section*/}
            <BlogSectionTwo />

            {/*Client Section*/}
            <ClientSection customClass={'pt-50'} />

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}