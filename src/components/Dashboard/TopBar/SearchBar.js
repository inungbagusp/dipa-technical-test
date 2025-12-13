"use client";
import Image from "next/image";

const SearchBar = () => {
    return (
        <div className="relative flex items-center w-[320px] h-[32px] bg-[#21262B] border border-[#2A3036] rounded-[6px]">
            <Image
                src="/image/dashboard/icon-search.svg"
                width={18}
                height={18}
                alt="Search"
                className="absolute left-[12px]"
            />
            <input
                type="text"
                name="search"
                placeholder="Search here..."
                className={[
                "text-white",
                "px-10 py-2",
                "rounded-lg",
                "placeholder-[#677489]",
                "focus:outline-none",
                "w-full",
                ].join(" ")}
            />
            <Image
                src="/image/dashboard/icon-search-option.svg"
                width={43}
                height={21}
                alt="Search option"
                className="absolute right-[6px]"
            />
        </div>
    );
}

export default SearchBar;
