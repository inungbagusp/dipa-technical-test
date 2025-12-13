"use client";

import { useState } from "react";
import ChartFilter from "@/components/Dashboard/Chart/ChartFilter";
import PortfolioChart from "@/components/Dashboard/Chart/PortfolioChart";
import CandlestickChart from "@/components/Dashboard/Chart/CandlestickChart";
import Image from "next/image";

const ChartContainer = ({ dataSetChart, candleData }) => {
    const [activeRange, setActiveRange] = useState("6M");
    const [chartMode, setChartMode] = useState("line");

    const chartData = dataSetChart[activeRange];

    return (
        <div className="flex flex-col gap-12 xl:pr-4 md:gap-6 w-full xl:border-r border-[#1C2127]">

            {/* Top Bar: Filter + Chart Mode */}
            <div className="flex md:flex-row flex-col justify-between md:items-start gap-2">
                <div className="flex flex-col gap-2">
                    <p className="ff-inter text-[14px] font-normal lh-120 ls-0 text-(--text-gray-light)">Total portfolio</p>
                    <div className="flex flex-row items-center gap-2">
                        <h3 className="ff-intertight text-[24px] font-medium lh-150 ls-0 text-white">$94.726.50</h3>
                        <button
                            className={[
                                "flex",
                                "items-center",
                                "justify-center",
                                "rounded-[4px]",
                                "px-[6px]",
                                "relative",
                                "group",
                                "py-[2px]",
                                "h-[22px]"
                            ].join(" ")}
                        >
                            <span
                                className={[
                                    "absolute",
                                    "inset-0",
                                    "rounded-[4px]",
                                    "p-px",
                                    "bg-[linear-gradient(to_right,#8ADDC6,#4FCBA8)]",
                                    "opacity-100",
                                    "group-hover:opacity-90",
                                    "transition-opacity"
                                ].join(" ")}
                            />
                            <span
                                className={[
                                    "absolute",
                                    "inset-px",
                                    "rounded-[4px]",
                                    "bg-[#111418]"
                                ].join(" ")}
                            />
                            <span
                                className={[
                                    "relative",
                                    "bg-[linear-gradient(to_right,#8ADDC6,#4FCBA8)]",
                                    "bg-clip-text",
                                    "text-transparent",
                                    "text-[12px]",
                                    "font-medium",
                                    "ff-intertight",
                                    "lh-150",
                                    "ls-0"
                                ].join(" ")}
                            >
                                +0.33
                            </span>
                        </button>
                    </div>
                    <p className="ff-inter text-[14px] font-normal lh-150 ls-0 text-(--text-gray-light)">+$2.987</p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 max-h-[36px]">
                    {/* Time Range Filter */}
                    <ChartFilter activeRange={activeRange} setActiveRange={setActiveRange} />

                    {/* Chart Mode Switch */}
                    <div className="max-w-[80px] flex items-center gap-1 bg-[#111418] border border-[#1C2127] rounded-md px-2 py-1">
                        {/* Line Mode */}
                        <button
                            onClick={() => setChartMode("line")}
                            className={[
                            "p-1 px-2 rounded-md transition-colors cursor-pointer",
                            chartMode === "line"
                                ? "bg-[#1A1D21]"
                                : "opacity-50 hover:opacity-80"
                            ].join(" ")}
                        >
                            <Image src="/image/dashboard/icon-chartline.svg" width={14} height={14} alt="line chart" />
                        </button>
                        {/* Candlestick Mode */}
                        <button
                            onClick={() => setChartMode("candle")}
                            className={[
                            "p-1 px-2 rounded-md transition-colors cursor-pointer",
                            chartMode === "candle"
                                ? "bg-[#1A1D21]"
                                : "opacity-50 hover:opacity-80"
                            ].join(" ")}
                        >
                            <Image src="/image/dashboard/icon-candle.svg" width={14} height={14} alt="candlestick chart" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full h-[300px]">
                {chartMode === "line" ? (
                    <PortfolioChart chartData={chartData} />
                ) : (
                    <CandlestickChart candleData={candleData} />
                )}
            </div>

        </div>
    );
}

export default ChartContainer;
