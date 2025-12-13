"use client";

import SearchBar from "./SearchBar";
import SettingButton from "./SettingButton";
import Image from "next/image";

const TopBar = ({ setIsOpen }) => {
    return (
        <div className="flex items-center justify-between gap-6">

            {/* MOBILE: Hamburger + Title */}
            <div className="flex items-center gap-3 lg:hidden">
                <button onClick={() => setIsOpen(true)} className="w-[18px] h-[18px]">
                    <Image src="/image/dashboard/icon-white-hamburger.svg" width={18} height={18} alt="menu" />
                </button>

                <h1 className="ff-intertight lh-150 ls-0 text-white text-[16px] font-medium">Dashboard</h1>
            </div>

            {/* DESKTOP TITLE */}

            {/* Right side */}
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-6">
                    <h1 className="hidden lg:block ff-intertight lh-150 ls-0 text-white text-[16px] font-medium">
                        Dashboard
                    </h1>
                    <div className="hidden md:block">
                        <SearchBar />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-[6px] rounded-[6px] bg-[#2A3036] block md:hidden lg:min-w-[97px] h-[32px] transition">
                        <Image
                            src="/image/dashboard/icon-search.svg"
                            width={20}
                            height={20}
                            alt="Search option"
                        />
                    </button>
                    <SettingButton />
                </div>
            </div>
        </div>
    );
}

export default TopBar;
