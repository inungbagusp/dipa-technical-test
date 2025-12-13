"use client";

import Image from "next/image";

const SwapButton = () => {
    return (
        <div
            className={[
                "w-[40px] h-[40px]",
                "rounded-full",
                "bg-[#1A1D21]",
                "flex items-center justify-center",
                "shadow-[0_0_8px_rgba(0,0,0,0.4)]",
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
