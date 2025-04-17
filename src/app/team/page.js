import Breadcrumb from "@/components/Breadcrumb";
import TeamBannerSection from "@/components/PageSections/TeamBannerSection";
import TeamSectionThree from "@/components/PageSections/TeamSectionThree";
import NewsletterSection from "@/components/PageSections/NewsletterSection";

const menus = [
    { label: "Team", to: "" },
];

export default function Team() {
    return (
        <>
            {/*breadcrumb*/}
            <Breadcrumb menus={menus}/>

            {/*Team Area*/}
            <TeamBannerSection />

            {/*Team Section*/}
            <TeamSectionThree />

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}