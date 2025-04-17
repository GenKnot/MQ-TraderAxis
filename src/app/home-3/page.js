import HeroSectionThree from "@/components/PageSections/HeroSectionThree";
import ServiceSectionThree from "@/components/PageSections/ServiceSectionThree";
import ProjectSectionThree from "@/components/PageSections/ProjectSectionThree";
import ClientSection from "@/components/PageSections/ClientSection";
import AboutSectionThree from "@/components/PageSections/AboutSectionThree";
import CounterSection from "@/components/PageSections/CounterSection";
import TestimonialSectionThree from "@/components/PageSections/TestimonialSectionThree";
import WhyChooseUsSection from "@/components/PageSections/WhyChooseUsSection";
import CtaSectionTwo from "@/components/PageSections/CtaSectionTwo";
import BlogSectionThree from "@/components/PageSections/BlogSectionThree";
import NewsletterSection from "@/components/PageSections/NewsletterSection";

export default function HomeThree() {
    return (
        <>
            {/*Hero Area*/}
            <HeroSectionThree />

            {/*Service Section*/}
            <ServiceSectionThree />

            {/*Project Section*/}
            <ProjectSectionThree />

            {/*Client Section*/}
            <ClientSection customClass={'pt-0'} />

            {/*About Section*/}
            <AboutSectionThree />

            {/*Counter Section*/}
            <CounterSection customClass={'pt-0 pb-50'} />

            {/*Testimonial Section*/}
            <TestimonialSectionThree />

            {/*Why Choose Us Section*/}
            <WhyChooseUsSection />

            {/*CTA Area*/}
            <CtaSectionTwo />

            {/*Blog Section*/}
            <BlogSectionThree />

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}