export const menuItems = [
    {
        label: "Home",
        link: "/",
    },

    {
        label: "About",
        link: "/about",
    },

    {
        label: "Gallery",
        link: "/projects",
        subMenu: [
            {label: "All Collections", link: "/projects"},
            {label: "Nature Sculptures", link: "/projects/nature"},
            {label: "Animal Carvings", link: "/projects/animals"},
            {label: "Abstract Art", link: "/projects/abstract"},
            {label: "Home Decor", link: "/projects/decor"}
        ]
    },

    {
        label: "Craftsmanship",
        link: "/services",
        subMenu: [
            {label: "Our Process", link: "/services"},
            {label: "Materials", link: "/services/materials"},
            {label: "Custom Orders", link: "/services/custom"}
        ]
    },

    {
        label: "Contact",
        link: "/contact"
    },

    {
        label: "FAQ",
        link: "/faq"
    }
];