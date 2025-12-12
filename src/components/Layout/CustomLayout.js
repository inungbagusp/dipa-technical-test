"use client";

import NavbarContainer from "@/components/Navbar/NavbarContainer";
import FooterContainer from "@/components/Footer/FooterContainer";

export default function CustomLayout({ children }) {
    return (
        <>
            <NavbarContainer />
                {children}
            <FooterContainer />
        </>
    );
}
