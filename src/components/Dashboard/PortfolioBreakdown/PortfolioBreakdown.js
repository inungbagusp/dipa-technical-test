"use client";

import { PieChart, Pie, Cell } from "recharts";
import { portfolioBreakdown } from "@/data/dashboard";

const PortfolioBreakdownChart = () => {
    const total = portfolioBreakdown.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className={[
            "flex flex-col items-center justify-center w-full xl:min-w-[353px] relative",
            "bg-[#111418] border border-[#1C2127] rounded-xl py-5 px-4 gap-2"
        ].join(" ")}>

            <div className="flex items-center justify-between w-full">
                <h3 className="ff-inter font-medium text-[14px] lh-150 ls-neg1 text-white">Portfolio Breakdown</h3>
                <p className="ff-inter font-medium text-[12px] lh-150 ls-0 text-[#97A3B6] hover:text-white">See all</p>
            </div>

            {/* TEXT DI TENGAH */}
            <div className="absolute flex flex-col items-center justify-center top-[120px] mb-3">
                <p className="ff-inter text-white text-[16px] font-medium lh-150 ls-0">
                    BTC
                </p>
                <p className="ff-inter text-(--text-gray-light) text-[9px] lh-150 ls-0">
                    LARGEST HOLDING
                </p>
            </div>

            {/* DONUT CHART */}
            <PieChart width={164} height={164}>
                <Pie
                    data={portfolioBreakdown}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={75}
                    startAngle={230}
                    endAngle={-55}
                    strokeWidth={6}
                >
                {portfolioBreakdown.map((entry, index) => (
                    <Cell
                        key={index}
                        fill={entry.color}
                        stroke="#111418"
                        strokeWidth={6}
                    />
                ))}
                </Pie>
            </PieChart>

            {/* LEGEND */}
            <div className="flex items-center justify-between w-full mt-4 px-6">
                {portfolioBreakdown.map((item, i) => (
                    <div key={i} className="text-center">
                        <div className="flex items-center gap-2 justify-center mb-1">
                            <span
                                className="w-[8px] h-[8px] rounded-[2px]"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="ff-inter text-(--text-gray-light) text-[14px] lh-150 ls-0">{item.name}</span>
                        </div>
                        <p className="ff-inter text-white text-[14px] font-medium lh-150 ls-0">
                            {item.value}%
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PortfolioBreakdownChart;
