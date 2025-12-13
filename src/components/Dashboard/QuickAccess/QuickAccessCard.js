"use client";

import { useState } from "react";
import QuickAccessTabs from "./QuickAccessTabs";
import QuickAccessForm from "./QuickAccessForm";

const QuickAccessCard = () => {
    const [activeTab, setActiveTab] = useState("swap");

    return (
        <div className={[
            "w-full",
            "xl:pl-4",
        ].join(" ")}
        >

            {/* Header */}
            <h3 className="ff-inter text-white text-[14px] lh-150 ls-0 font-medium mb-4">
                Quick Access
            </h3>

            {/* Tabs */}
            <QuickAccessTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Form */}
            <QuickAccessForm activeTab={activeTab} />
        </div>
    );
}

export default QuickAccessCard;
