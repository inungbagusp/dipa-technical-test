"use client";

import Image from "next/image";
import { quickAccessTabs } from "@/data/dashboard";

const QuickAccessTabs = ({ activeTab, setActiveTab }) => {

    return (
        <div className="flex flex-col sm:flex-row gap-2 bg-[#0E1114] border border-[#1C2127] rounded-lg px-2 py-1 mb-4">
            {quickAccessTabs.map(tab => {
                const isActive = activeTab === tab.key;

                return (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={[
                            "h-[22px] px-3 rounded-[4px] text-[12px] transition-colors flex items-center gap-1 cursor-pointer",
                            isActive
                                ? "bg-[#2A3036] text-white"
                                : "text-[#7A828A] hover:text-white"
                        ].join(" ")}
                    >
                        <Image
                            src={tab.icon}
                            width={12}
                            height={12}
                            alt={tab.label}
                        />
                        <span className="text-[12px]">{tab.label}</span>
                    </button>
                );
            })}
        </div>
    );
}

export default QuickAccessTabs;
