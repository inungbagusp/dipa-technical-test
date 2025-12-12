"use client";

import { useEffect, useState } from "react";

const useIsMobile = (breakpoint = 1024) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        checkScreen(); // initial check
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, [breakpoint]);

    return isMobile;
}

export default useIsMobile;
