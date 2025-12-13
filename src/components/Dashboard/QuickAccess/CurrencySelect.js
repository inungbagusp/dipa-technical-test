"use client";

import Image from "next/image";

const CurrencySelect = ({ defaultIcon, defaultSymbol }) => {
    return (
        <button className="flex items-center gap-2 text-white text-[14px] ml-3">
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
