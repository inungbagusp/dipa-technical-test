"use client";

import { motion } from "framer-motion";
import useCountUp from "@/utils/useCountUp";

const CounterCard = ({ value, prefix = "", suffix = "", label, sublabel, active }) => {
    const count = useCountUp(active ? value : 0, 2000);

    return (
        <div className="w-full flex flex-col items-center text-center py-20 px-10 h-[260px] border-r border-border-gray last:border-r-0">
            <motion.h3 
                className="ts-64 font-medium ff-roobert lh-130 ls-neg2 text-(--text-gray-scale-900) mb-4"
            >
                {prefix}{count}{suffix}
            </motion.h3>

            <p className="ts-18 font-normal lh-160 ls-0 text-(--text-gray-muted)">{label}</p>
            {sublabel && (
                <p className="ts-18 font-normal lh-160 ls-0 text-(--text-gray-muted)">{sublabel}</p>
            )}
        </div>
    );
};

export default CounterCard;
