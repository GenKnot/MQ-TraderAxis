import carving1 from "@/assets/img/project/1-0.jpg";
import carving2 from "@/assets/img/project/1-1.png";
import carving3 from "@/assets/img/project/1-4.jpg";
import carving4 from "@/assets/img/project/1-5.jpg";
import carving5 from "@/assets/img/project/project-1.jpg";
import carving6 from "@/assets/img/project/project-2.jpg";
import carving7 from "@/assets/img/project/project-3.jpg";
import carving8 from "@/assets/img/project/project-4.jpg";

export const woodCarvings = [
    {
        id: 1,
        title: "Eagle in Flight",
        category: "Animal Carving",
        description: "Meticulously hand-carved eagle sculpture capturing the majestic bird in mid-flight with intricate feather details and dynamic posture.",
        material: "American Black Walnut",
        dimensions: "18\" × 12\" × 8\"",
        price: 1795,
        inStock: true,
        image: carving1,
        gallery: [carving1, carving5, carving3]
    },
    {
        id: 2,
        title: "Forest Spirit",
        category: "Nature Series",
        description: "This ethereal wood spirit emerges from the natural grain of the wood, symbolizing the connection between humanity and nature.",
        material: "Cherry Wood",
        dimensions: "24\" × 10\" × 8\"",
        price: 2250,
        inStock: true,
        image: carving2,
        gallery: [carving2, carving6, carving4]
    },
    {
        id: 3,
        title: "Harmony Bowl",
        category: "Functional Art",
        description: "Beautiful hand-carved decorative bowl with flowing spiral patterns, perfect as a centerpiece or for holding precious items.",
        material: "Maple",
        dimensions: "12\" diameter × 4\" height",
        price: 895,
        inStock: false,
        image: carving3,
        gallery: [carving3, carving7, carving1]
    },
    {
        id: 4,
        title: "Mountain Landscape",
        category: "Relief Carving",
        description: "Intricate relief carving depicting a serene mountain landscape with detailed trees, flowing water, and dimensional terrain.",
        material: "Oak",
        dimensions: "30\" × 20\" × 2\"",
        price: 1950,
        inStock: true,
        image: carving4,
        gallery: [carving4, carving8, carving2]
    },
    {
        id: 5,
        title: "Dancing Dolphins",
        category: "Animal Carving",
        description: "Playful pair of dolphins carved in mid-leap, showcasing the grace and joy of these magnificent marine creatures.",
        material: "Maple with Blue Resin Accents",
        dimensions: "22\" × 15\" × 10\"",
        price: 2450,
        inStock: true,
        image: carving5,
        gallery: [carving5, carving1, carving7]
    },
    {
        id: 6,
        title: "Ancient Tree",
        category: "Nature Series",
        description: "Symbolic representation of the tree of life with intricate branch and root systems, celebrating the cycles of nature.",
        material: "Reclaimed Oak",
        dimensions: "36\" × 24\" × 3\"",
        price: 3200,
        inStock: true,
        image: carving6,
        gallery: [carving6, carving2, carving8]
    },
    {
        id: 7,
        title: "Artisan Jewelry Box",
        category: "Functional Art",
        description: "Elegant jewelry box with hand-carved floral patterns on the exterior and meticulously crafted compartments inside.",
        material: "Cherry Wood with Maple Inlays",
        dimensions: "12\" × 8\" × 6\"",
        price: 1250,
        inStock: true,
        image: carving7,
        gallery: [carving7, carving3, carving5]
    },
    {
        id: 8,
        title: "Ocean Waves",
        category: "Abstract Art",
        description: "Dynamic abstract representation of ocean waves, capturing the movement and energy of water in solid wood.",
        material: "Black Walnut and Maple",
        dimensions: "28\" × 16\" × 4\"",
        price: 1850,
        inStock: false,
        image: carving8,
        gallery: [carving8, carving4, carving6]
    }
];

export const woodCarvingCategories = [
    { id: "all", label: "All Collections" },
    { id: "nature-series", label: "Nature Series" },
    { id: "animal-carving", label: "Animal Carvings" },
    { id: "relief-carving", label: "Relief Carvings" },
    { id: "abstract-art", label: "Abstract Art" },
    { id: "functional-art", label: "Functional Art" }
];