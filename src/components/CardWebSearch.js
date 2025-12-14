"use client";
import { useState } from "react";
import Image from "next/image";

const CardWebSearch = () => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (!query.trim()) return;
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
    };

    return (
        <div className={[
            "w-full",
            "max-w-[620px]",
            "flex flex-col justify-between h-[194px]",
            "bg-white rounded-[18px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]",
            "border border-border-light-gray",
            'p-[2px]',
            "relative",
        ].join(" ")}
        >
            <div className="border border-border-gray rounded-[18px] p-5 flex flex-col justify-between h-[194px]">
                <input
                    type="text"
                    name="query"
                    placeholder="Ask anythings ..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className={[
                        "w-full bg-transparent outline-none",
                        "ff-roobert font-regular",
                        "text-(--text-gray-scale-muted)",
                        "text-[14px] lg:text-[20px] lh-160",
                        "placeholder:text-[#6B7B94]",
                    ].join(" ")}
                />

                {/* Bottom Row */}
                <div className="flex items-center justify-between">
                    {/* LEFT ACTIONS */}
                    <div className="flex items-center gap-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-border-light-gray text-[#141F2E]">
                            <Image src="/image/icon/plus.svg" width={18} height={18} alt="Plus" />
                        </button>
                        <button
                            onClick={handleSearch}
                            className="flex items-center gap-2 px-4 h-10 rounded-full border border-border-light-gray bg-white text-[#141F2E] cursor-pointer"
                        >
                            <Image src="/image/icon/globe.svg" width={18} height={18} alt="Globe" />
                            <span className="text-[10px] lg:text-[14px] lh-150 ls-0 ff-roobert font-regular text-(--text-gray-scale-900)">Web Search</span>
                        </button>
                    </div>

                    {/* RIGHT ACTIONS */}
                    <div className="flex items-center gap-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-border-gray text-[#141F2E]">
                            <Image src="/image/icon/microphone.svg" width={18} height={18} alt="Microphone" />
                        </button>
                        <button
                            onClick={handleSearch}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-r from-[#3C7BFF] to-[#0542FC] shadow-md"
                        >
                            <Image src="/image/icon/sparkle-white.svg" width={18} height={18} alt="Sparkle" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={[
                "w-[300px] sm:w-[400px]",
                "h-[2px]",
                "absolute bottom-[-2px] left-1/2 -translate-x-1/2",
                "bg-[linear-gradient(90deg,rgba(147,210,255,0)_0%,#93D2FF_25%,#0542FC_50%,#93D2FF_75%,rgba(147,210,255,0)_100%)]",
            ].join(" ")} />
        </div>
    );
}

export default CardWebSearch;
