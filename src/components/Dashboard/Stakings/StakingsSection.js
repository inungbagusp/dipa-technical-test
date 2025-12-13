"use client";

import { useState } from "react";
import StakingSummarySlider from "./StakingSummarySlider";
import StakingTabs from "./StakingTabs";
import StakingListItem from "./StakingListItem";
import { stakingList } from "@/data/stakings";

const StakingsSection = () => {
    const [activeTab, setActiveTab] = useState("All");

    return (
        <section className="bg-[#111418] border border-[#1C2127] rounded-xl py-5 px-4 w-full">

            {/* TITLE */}
            <div className="flex justify-between items-center mb-4">
                <h4 className="ff-inter text-white text-[14px] font-medium lh-150 ls-neg1">My Stakings</h4>
            </div>

            {/* SUMMARY CARDS */}
            <StakingSummarySlider />

            {/* TABS */}
            <StakingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* LIST */}
            <div className="mt-3">
                {stakingList.map((item, i) => (
                    <StakingListItem key={i} item={item} />
                ))}
            </div>
        </section>
    );
}

export default StakingsSection;
