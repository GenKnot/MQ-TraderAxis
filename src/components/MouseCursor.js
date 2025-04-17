"use client";

import { useEffect, useRef } from "react";

export default function MouseCursor() {
    const cursorInnerRef = useRef(null);
    const cursorOuterRef = useRef(null);

    useEffect(() => {
        const cursorInner = cursorInnerRef.current;
        const cursorOuter = cursorOuterRef.current;

        if (!cursorInner || !cursorOuter) return;

        let posX = 0,
            posY = 0;
        let isHovering = false;

        const handleMouseMove = (event) => {
            if (!isHovering) {
                cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
            }
            cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
            posX = event.clientX;
            posY = event.clientY;
        };

        const handleMouseEnter = () => {
            cursorInner.classList.add("cursor-hover");
            cursorOuter.classList.add("cursor-hover");
        };

        const handleMouseLeave = (event) => {
            if (
                event.target.tagName === "A" ||
                event.target.tagName === "BUTTON" ||
                event.target.classList.contains("cursor-pointer")
            ) {
                return;
            }
            cursorInner.classList.remove("cursor-hover");
            cursorOuter.classList.remove("cursor-hover");
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.querySelectorAll("button, a, .cursor-pointer").forEach((element) => {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
        });

        cursorInner.style.visibility = "visible";
        cursorOuter.style.visibility = "visible";

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.querySelectorAll("button, a, .cursor-pointer").forEach((element) => {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorOuterRef} className="mouseCursor cursor-outer"></div>
            <div ref={cursorInnerRef} className="mouseCursor cursor-inner">
                <span>Drag</span>
            </div>
        </>
    );
}
