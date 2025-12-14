"use client";

import Image from "next/image";

const StakingTabs = ({ activeTab, setActiveTab }) => {
    const tabs = ["All", "Staked", "Earnings", "History"];

    return (
        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:items-center justify-between">
            <div className={[
                "flex flex-col gap-2 sm:gap-0 items-start sm:items-center sm:flex-row",
                "bg-[#0E1114] border border-[#1C2127] rounded-lg px-2 py-1"
            ].join(" ")}
            >
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={[
                            "px-[10px] py-[2px] rounded-[4px] text-[13px] font-medium transition-colors text-inter min-w-[56px]",
                            "w-full sm:w-auto text-left sm:text-center",
                            activeTab === tab
                                ? "bg-[#2A3036] text-white"
                                : "text-[#7A828A] hover:text-white"
                        ].join(" ")}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <button className={[
                "flex items-center gap-1 bg-[#2A3036] border border-[#323941] px-1 py-px rounded-[4px] text-white text-[12px]",
                "hover:bg-[linear-gradient(to_bottom,#576470CC,#57647000)]",
                "cursor-pointer h-[28px]",
            ].join(" ")}
            >
                Sort by
                <Image src="/image/dashboard/icon-chevron-down.svg" width={14} height={14} alt="Sort"/>
            </button>
        </div>
    );
}

export default StakingTabs;
