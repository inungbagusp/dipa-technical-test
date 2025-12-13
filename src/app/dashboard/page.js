"use client";

import { useState } from "react";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import SidebarMobile from "@/components/Dashboard/Sidebar/SidebarMobile";
import TopBar from "@/components/Dashboard/TopBar/TopBar";
import SecurityBanner from "@/components/Dashboard/SecurityBanner";
import ChartContainer from "@/components/Dashboard/Chart/ChartContainer";
import { dataSetChart, candleData } from "@/data/dashboard";
import QuickAccessCard from "@/components/Dashboard/QuickAccess/QuickAccessCard";
import PortfolioBreakdownContainer from "@/components/Dashboard/PortfolioBreakdown/PortfolioBreakdownContainer";
import MarketsCard from "@/components/Dashboard/Markets/MarketsCard";
import StakingsSection from "@/components/Dashboard/Stakings/StakingsSection";
import CommunitySlider from "@/components/Dashboard/Community/CommunitySlider";

export default function DashboardLayout() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full min-h-screen bg-[#0F1115]">
            
            {/* Mobile Sidebar */}
            <SidebarMobile isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>

            {/* MAIN CONTENT */}
            <div className="lg:ml-[240px] p-4 md:py-[18px] md:px-[20px] bg-[#191D21]">
                <TopBar setIsOpen={setIsOpen} />
            </div>
            <div className="p-4">
                <div className="lg:ml-[240px] mb-4">
                    <SecurityBanner />
                </div>
                <div className={[
                    "lg:ml-[240px] p-4 md:py-5 md:px-[20px]",
                    "flex flex-col xl:flex-row",
                    "bg-[#111418] border border-[#1C2127] rounded-xl",
                    "gap-6 xl:gap-0"
                ].join(" ")}
                >
                    <ChartContainer dataSetChart={dataSetChart} candleData={candleData} />
                    <div className="w-full xl:max-w-[387px]">
                        <QuickAccessCard />
                    </div>
                </div>
            </div>
            <div className="lg:ml-[240px] p-4 md:px-[20px] md:py-0 flex flex-col xl:flex-row gap-4">
                <div className="flex flex-col gap-4">
                    <PortfolioBreakdownContainer />
                    <MarketsCard />
                </div>
                <div className="w-full xl:min-w-[427px]">
                    <StakingsSection />
                    <CommunitySlider />
                </div>
            </div>

        </div>
    );
}
