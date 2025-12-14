"use client";

import Image from "next/image";

const CurrencySelect = ({ defaultIcon, defaultSymbol }) => {
    return (
        <button className={[
            "flex",
            "items-center",
            "gap-2",
            "text-white",
            "text-[14px]",
            "ml-3",
            "bg-[#21262B]",
            "py-1",
            "px-[6px]",
            "rounded-[6px]",
            "shadow-lg",
            "border",
            "border-[#FFFFFF0A]"
        ].join(" ")}
        >
            <Image
                src={`/image/dashboard/${defaultIcon}.svg`}
                width={16}
                height={16}
                alt={defaultSymbol}
            />
            <span>{defaultSymbol}</span>
            <Image
                src="/image/dashboard/icon-chevron-down.svg"
                width={14}
                height={14}
                alt="dropdown"
                className="opacity-70"
            />
        </button>
    );
}

export default CurrencySelect;
