"use client";

import PortfolioBreakdown from "@/components/Dashboard/PortfolioBreakdown/PortfolioBreakdown";
import YourAssets from "@/components/Dashboard/PortfolioBreakdown/YourAssets";

const PortfolioBreakdownContainer = () => {
    return (
        <div className="flex flex-col sm:flex-row items-start gap-4">
            <YourAssets />
            <PortfolioBreakdown />
        </div>
    );
}

export default PortfolioBreakdownContainer;