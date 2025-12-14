"use client";

import Image from "next/image";

const SwapButton = () => {
    return (
        <div
            className={[
                "w-[40px] h-[40px]",
                "rounded-full",
                "bg-[#2A3036] border border-[#FFFFFF0A]",
                "flex items-center justify-center",
                "shadow-lg",
                "cursor-pointer",
                "z-10"
            ].join(" ")}
        >
            <Image
                src="/image/dashboard/icon-switch.svg"
                width={16}
                height={16}
                alt="swap"
            />
        </div>
    );
}

export default SwapButton;
