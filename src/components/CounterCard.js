"use client";

import { motion } from "framer-motion";
import useCountUp from "@/utils/useCountUp";

const CounterCard = ({ value, prefix = "", suffix = "", label, sublabel, active }) => {
    const count = useCountUp(active ? value : 0, 2000);

    return (
        <div className={[
            "w-full",
            "flex",
            "flex-col",
            "items-center",
            "text-center",
            "py-[20px]",
            "px-[20px]",
            "border-r",
            "border-border-gray",
            "last:border-r-0",
            "md:py-[50px]",
            "md:h-[260px]",
        ].join(" ")}>
            <motion.h3 className={[
                "text-[28px]",
                "font-medium",
                "lh-130",
                "ls-neg2",
                "text-(--text-gray-scale-900)",
                "mb-2",
                "md:text-[64px]",
                "md:mb-4"
            ].join(" ")}>
                {prefix}{count}{suffix}
            </motion.h3>

            <p className={[
                "text-[12px]",
                "font-normal",
                "lh-160",
                "ls-0",
                "text-(--text-gray-muted)",
                "md:text-[18px]"
            ].join(" ")}>
                {label}
            </p>
            {sublabel && (
                <p className={[
                    "text-[12px]",
                    "font-normal",
                    "lh-160",
                    "ls-0",
                    "text-(--text-gray-muted)",
                    "md:text-[18px]",
                ].join(" ")}
                >
                    {sublabel}
                </p>
            )}
        </div>
    );
};

export default CounterCard;
