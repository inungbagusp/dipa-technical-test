"use client";

import Image from "next/image";

const StakingTabs = ({ activeTab, setActiveTab }) => {
    const tabs = ["All", "Staked", "Earnings", "History"];

    return (
        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:items-center justify-between">
            <div className="flex flex-col gap-2 sm:gap-0 items-start sm:items-center sm:flex-row bg-[#0E1114] border border-[#1C2127] rounded-lg px-2 py-[2px]">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={[
                            "px-[10px] py-[2px] rounded-lg text-[13px] font-medium transition-colors text-inter",
                            "w-full sm:w-auto text-left sm:text-center",
                            activeTab === tab
                                ? "bg-[#1A1D21] text-white"
                                : "text-[#97A3B6] hover:bg-[#1A1D21] font-normal"
                        ].join(" ")}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <button className="flex items-center gap-1 bg-[#323941] border border-[#454F58] px-1 py-[2px] rounded-[4px] text-white text-[12px]">
                Sort by
                <Image src="/image/dashboard/icon-chevron-down.svg" width={14} height={14} alt="Sort"/>
            </button>
        </div>
    );
}

export default StakingTabs;
