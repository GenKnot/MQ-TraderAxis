import Breadcrumb from "@/components/Breadcrumb";
import BlogDetailsSection from "@/components/PageSections/BlogDetailsSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";

const menus = [
    { label: "Blog", to: "/blog" },
    { label: "Details", to: "" },
];

export default function BlogShow() {
    return (
        <>
            {/*breadcrumb*/}
            <Breadcrumb menus={menus}/>

            {/*Blog Details Page*/}
            <BlogDetailsSection />

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}