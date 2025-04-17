"use client"

import {useAppContext} from "@/context";

export default function HeaderSearch() {
    const {handleHeaderSearch} = useAppContext();

    return (
        <div className="search-trigger" onClick={handleHeaderSearch}>
            <i className="fal fa-search"/>
        </div>
    )
}