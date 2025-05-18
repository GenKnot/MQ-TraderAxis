"use client";

import Link from "next/link";
import {menuItems} from "@/data/menu";
import MobileMenuNavBar from "@/components/MobileMenuNavBar";
import HeaderSearch from "@/components/HeaderSearch";
import {useEffect, useState} from "react";

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 400) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="header-area">
            <div className={isSticky ? "header-sticky" : ""} id="header-sticky">
                <div className="navigation">
                    <div className="container">
                        <div className="header-inner-box">

                            {/* Logo */}
                            <Link href="/" className="logo">M&Q TraderAxis</Link>

                            {/* Desktop Menu */}
                            <div className="main-menu d-none d-lg-block">
                                <ul>
                                    {menuItems.map((item, index) => (
                                        <li key={index} className={item.subMenu ? "has-submenu" : ""}>
                                            <Link href={item.link} className="navlink">{item.label}</Link>

                                            {item.subMenu && (
                                                <ul className="sub-menu">
                                                    {item.subMenu.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link href={subItem.link}>{subItem.label}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Header Right (Search, Menu Trigger) */}
                            <div className="header-right">
                                <HeaderSearch />
                                <div className="header-btn">
                                    <div className="menu-trigger">
                                        <span className="lines" />
                                        <span className="lines" />
                                        <span className="lines" />
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Menu */}
                            <MobileMenuNavBar menuItems={menuItems}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}