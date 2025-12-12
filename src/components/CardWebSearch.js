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
        <div className="w-full max-w-[620px] flex flex-col justify-between h-[194px] bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-border-light-gray p-5">

        {/* INPUT FIELD */}
            <input
                type="text"
                name="query"
                placeholder="Ask anythings ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full bg-transparent outline-none ff-roobert font-regular text-(--text-gray-scale-muted) text-[14px] lg:text-[20px] lh-160"
            />

            {/* Bottom Row */}
            <div className="flex items-center justify-between">
                {/* LEFT ACTIONS */}
                <div className="flex items-center gap-2">
                    {/* Plus Button */}
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-border-light-gray text-[#141F2E]">
                        <Image src="/image/icon/plus.svg" width={18} height={18} alt="Plus" />
                    </button>
                    {/* Web Search */}
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
                    {/* Mic Button */}
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-border-gray text-[#141F2E]">
                        <Image src="/image/icon/microphone.svg" width={18} height={18} alt="Microphone" />
                    </button>
                    {/* Submit Button */}
                    <button
                        onClick={handleSearch}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-r from-[#3C7BFF] to-[#0542FC] shadow-md"
                    >
                        <Image src="/image/icon/sparkle-white.svg" width={18} height={18} alt="Sparkle" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardWebSearch;
