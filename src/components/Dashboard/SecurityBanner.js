"use client";

import Image from "next/image";

const SecurityBanner = () => {
    return (
        <div
            className={[
                "w-full",
                "flex",
                "flex-col",
                "md:flex-row",
                "items-start",
                "md:items-center",
                "justify-between",
                "bg-[#111418]",
                "border border-[#1C2127]",
                "rounded-xl",
                "md:px-6",
                "px-2",
                "py-4",
                "shadow-[0_0_20px_rgba(0,0,0,0.2)]",
                "relative",
                "overflow-hidden",
                "gap-4",
                "md:gap-11",
            ].join(" ")}
        >
            <Image
                src="/image/dashboard/dots-nav-footer.png"
                alt="dots"
                width={161}
                height={113}
                className="absolute top-[-24px] left-[-4px] pointer-events-none"
            />
            <Image
                src="/image/dashboard/pattern-dashboard.png"
                alt="dots"
                width={178}
                height={156}
                className="absolute top-[-12px] right-[-8px] pointer-events-none"
            />

            {/* LEFT SIDE */}
            <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
                <div
                    className={[
                        "w-[64px]",
                        "h-[64px]",
                        "rounded-full",
                        "bg-[rgba(76,80,85,0.2)]",
                        "flex",
                        "items-center",
                        "justify-center",
                        "shadow-[0_0_12px_rgba(71,217,255,0.15)]",
                        "shrink-0"
                    ].join(" ")}
                >
                    <Image
                        src="/image/dashboard/icon-security.svg"
                        width={64}
                        height={64}
                        alt="Security icon"
                        className="opacity-90"
                    />
                </div>

                <div className="flex flex-col">
                    <h3 className="ff-inter text-white text-[14px] font-medium lh-150 ls-0 mb-1">
                        Your assets, fully protected
                    </h3>
                    <p className="ff-inter text-[14px] text-(--text-gray-light) lh-150 ls-0 font-normal">
                        Keep your funds safe with bank-grade encryption and 2FA security.
                        Activate additional protection for complete peace of mind.
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <button
                className={[
                    "flex",
                    "items-center",
                    "justify-center",
                    "rounded-lg",
                    "px-4",
                    "relative",
                    "group",
                    "w-full",
                    "py-2",
                    "xl:py-1",
                    "md:w-[138px]",
                    "xl:h-[36px]",
                ].join(" ")}
            >
                <span
                    className={[
                        "absolute",
                        "inset-0",
                        "rounded-lg",
                        "p-px",
                        "bg-[linear-gradient(to_right,#8ADDC6,#4FCBA8)]",
                        "opacity-100",
                        "group-hover:opacity-90",
                        "transition-opacity"
                    ].join(" ")}
                />
                <span
                    className={[
                        "absolute",
                        "inset-px",
                        "rounded-lg",
                        "bg-[#111418]"
                    ].join(" ")}
                />
                <span
                    className={[
                        "relative",
                        "bg-[linear-gradient(to_right,#8ADDC6,#4FCBA8)]",
                        "bg-clip-text",
                        "text-transparent",
                        "text-[14px]",
                        "font-medium",
                        "ff-inter",
                        "lh-150",
                        "ls-0"
                    ].join(" ")}
                >
                    Enable security
                </span>
            </button>
        </div>
    );
}

export default SecurityBanner;
