"use client";

import { createContext, useState, useContext, useEffect, useCallback } from "react";

const AppContext = createContext(null);

export function AppWrapper({ children }) {
    const [name, setName] = useState("Appix");
    const [toggleSearch, setToggleSearch] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    /** Handle Search Toggle */
    const handleHeaderSearch = useCallback(() => {
        setToggleSearch((prev) => !prev);
        document.body.classList.add("search-active");
    }, []);

    /** Handle Menu Toggle */
    const openMenu = useCallback((event) => {
        event.preventDefault();
        setMenuOpen(true);
        document.querySelectorAll(".extra-info, .offcanvas-overlay").forEach((el) => el.classList.add("active"));
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
        document.querySelectorAll(".extra-info, .offcanvas-overlay").forEach((el) => el.classList.remove("active"));
    }, []);

    /** Handle Mobile Navigation */
    const openMobileNav = useCallback(() => {
        setMobileNavOpen(true);
        document.querySelector(".mobile-nav")?.classList.add("show");
        document.querySelector(".overlay")?.classList.add("active");
    }, []);

    const closeMobileNav = useCallback(() => {
        setMobileNavOpen(false);
        document.querySelector(".mobile-nav")?.classList.remove("show");
        document.querySelector(".overlay")?.classList.remove("active");
    }, []);

    useEffect(() => {
        // Search Trigger
        const searchTrigger = document.querySelector(".search-trigger");
        const closeSearchElements = document.querySelectorAll(".close-search, .search-back-drop");

        // Menu Trigger
        const menuTrigger = document.querySelector(".menu-trigger");
        const closeMenuElements = document.querySelectorAll(".menu-close, .offcanvas-overlay");

        // Mobile Nav Trigger
        const mobileNavTrigger = document.querySelector("#hamburger");
        const closeMobileNavElements = document.querySelectorAll(".close-nav, .overlay");

        if (searchTrigger) searchTrigger.addEventListener("click", handleHeaderSearch);
        closeSearchElements.forEach((el) => el.addEventListener("click", () => {
            document.body.classList.remove("search-active");
            setToggleSearch(false);
        }));

        if (menuTrigger) menuTrigger.addEventListener("click", openMenu);
        closeMenuElements.forEach((el) => el.addEventListener("click", closeMenu));

        if (mobileNavTrigger) mobileNavTrigger.addEventListener("click", openMobileNav);
        closeMobileNavElements.forEach((el) => el.addEventListener("click", closeMobileNav));

        return () => {
            if (searchTrigger) searchTrigger.removeEventListener("click", handleHeaderSearch);
            closeSearchElements.forEach((el) => el.removeEventListener("click", () => {
                document.body.classList.remove("search-active");
                setToggleSearch(false);
            }));

            if (menuTrigger) menuTrigger.removeEventListener("click", openMenu);
            closeMenuElements.forEach((el) => el.removeEventListener("click", closeMenu));

            if (mobileNavTrigger) mobileNavTrigger.removeEventListener("click", openMobileNav);
            closeMobileNavElements.forEach((el) => el.removeEventListener("click", closeMobileNav));
        };
    }, [handleHeaderSearch, openMenu, closeMenu, openMobileNav, closeMobileNav]);

    return (
        <AppContext.Provider value={{
            name, setName,
            toggleSearch, handleHeaderSearch,
            menuOpen, openMenu, closeMenu,
            mobileNavOpen, openMobileNav, closeMobileNav
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
