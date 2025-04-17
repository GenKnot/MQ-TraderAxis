import gallery1 from "@/assets/img/project/gallery-1.jpg";
import gallery2 from "@/assets/img/project/gallery-2.jpg";
import gallery3 from "@/assets/img/project/gallery-3.jpg";
import gallery4 from "@/assets/img/project/gallery-4.jpg";
import gallery5 from "@/assets/img/project/gallery-5.jpg";


// Project Brief Details
export const projectBrief = [
    { label: "Total Area", value: "276.50 m2" },
    { label: "Living Space", value: "95.30 m2" },
    { label: "Material Space", value: "Prefabricated Concrete" },
    { label: "Total Cost", value: "$7,590", className: "total-cost" }
];

// Project Information
export const projectInfo = [
    { label: "Client", value: "Forest Lodge" },
    { label: "Location", value: "California, USA" },
    { label: "Year", value: "2023" }
];

// Gallery Images
export const galleryImages = [
    { image: gallery1, caption: "Drawing Room" },
    { image: gallery2, caption: "Dining Room" },
    { image: gallery3, caption: "Kitchen Room" },
    { image: gallery4, caption: "Common Room" },
    { image: gallery5, caption: "Bed Room", isBig: true }
];

// Challenges Section
export const challenges = [
    {
        text: "The Lakefront Retreat project presented a unique challenge for our team, as the client wanted a contemporary vacation home that seamlessly blended into its natural surrounding. This meant that we had to carefully consider how to incorporate modern design elements and materials."
    }
];

// Solutions Section
export const solutions = {
    text: "Our team worked closely with the client to design a vacation home that was modern and sleek, yet also integrated seamlessly into its natural surroundings.",
    detailedText: "We incorporate natural materials such as <span>wood and stone</span>, and used large windows and <span>expansive outdoor living spaces</span>",
    detailedText2: " to maximize the stunning views of the lake and surrounding mountains. The end result was a contemporary vacation home that felt both luxurious and grounded in nature, providing a serene and peaceful retreat for the client and their guest."
};

import projectImg1 from "@/assets/img/project/1-0.jpg";
import projectImg2 from "@/assets/img/project/1-1.png";
import projectImg3 from "@/assets/img/project/1-5.jpg";
import projectImg4 from "@/assets/img/project/1-4.jpg";

// Project Data
export const projects = [
    {
        id: 1,
        title: "Eagle in Flight",
        category: "Animal Carvings",
        image: projectImg1,
        layout: "col-xl-7 col-lg-7 col-md-6",
        link: "/projects/1"
    },
    {
        id: 2,
        title: "Forest Spirit",
        category: "Nature Series",
        image: projectImg2,
        layout: "col-xl-5 col-lg-5 col-md-6",
        link: "/projects/2"
    },
    {
        id: 3,
        title: "Harmony Bowl",
        category: "Functional Art",
        image: projectImg4,
        layout: "col-xl-5 col-lg-5 col-md-6",
        link: "/projects/3"
    },
    {
        id: 4,
        title: "Mountain Landscape",
        category: "Relief Carving",
        image: projectImg3,
        layout: "col-xl-7 col-lg-7 col-md-6",
        link: "/projects/4"
    }
];

export const projectCategories = [
    {
        id: 'nature-sculptures',
        label: 'Nature Sculptures',
        projects: [
            { number: '01', title: 'Nature Collection', image: new URL('@/assets/img/project/3-1.jpg', import.meta.url) },
        ],
    },
    {
        id: 'animal-carvings',
        label: 'Animal Carvings',
        projects: [
            { number: '01', title: 'Animal Collection', image: new URL('@/assets/img/project/3-4.jpg', import.meta.url) },
        ],
    },
    {
        id: 'abstract-art',
        label: 'Abstract Art',
        projects: [
            { number: '01', title: 'Abstract Collection', image: new URL('@/assets/img/project/3-7.jpg', import.meta.url) },
        ],
    },
    {
        id: 'functional-art',
        label: 'Functional Art',
        projects: [
            { number: '01', title: 'Functional Collection', image: new URL('@/assets/img/project/3-13.jpg', import.meta.url) },
        ],
    },
];

// Import project images
import project2Img1 from "@/assets/img/project/project-1.jpg";
import project2Img2 from "@/assets/img/project/project-2.jpg";
import project2Img3 from "@/assets/img/project/project-3.jpg";
import project2Img4 from "@/assets/img/project/project-4.jpg";
import project2Img5 from "@/assets/img/project/project-5.jpg";

// Projects Data
export const projectsTwoData = [
    { id: 1, title: "Lakefront Retreat", category: "Architecture", image: project2Img1, link: "/projects/2" },
    { id: 2, title: "Modern Bungalow House", category: "Interior", image: project2Img2, link: "/projects/2" },
    { id: 3, title: "Sustainable Office Building", category: "Landscape Design", image: project2Img3, link: "/projects/2" },
    { id: 4, title: "Industrial Chic Restaurant", category: "Architecture", image: project2Img4, link: "/projects/2" },
    { id: 5, title: "Mediterranean Villa", category: "Interior", image: project2Img5, link: "/projects/2" },
];