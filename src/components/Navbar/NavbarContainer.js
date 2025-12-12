"use client";

import { useState, useEffect } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const NavbarContainer = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 1025);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <header className="w-full border-b border-border-light-gray/80 bg-white sticky top-0 z-999">
            {isDesktop ? <DesktopMenu /> : <MobileMenu />}
        </header>
    );
}

export default NavbarContainer;
