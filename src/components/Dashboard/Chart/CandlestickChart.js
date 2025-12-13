"use client";

import {
	ComposedChart,
	Bar,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
} from "recharts";

// Tooltip — Candlestick Chart
const CandleTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		const d = payload[0].payload;
		return (
			<div className="bg-[#1A1D21] border border-[#2A3036] px-3 py-2 rounded-lg shadow-lg">
				<p className="text-white text-[12px]">{`${label}, 2025`}</p>
				<p className="text-[#4FCBA8] text-[12px]">Open: {d.open}</p>
				<p className="text-[#4FCBA8] text-[12px]">Close: {d.close}</p>
				<p className="text-[#4FCBA8] text-[12px]">High: {d.high}</p>
				<p className="text-[#4FCBA8] text-[12px]">Low: {d.low}</p>
			</div>
		);
	}
	return null;
};

const CandlestickChart = ({ candleData }) => {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<ComposedChart
				data={candleData}
				margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
			>
				<CartesianGrid stroke="#2A3036" strokeDasharray="4 4" vertical={false} />

				{/* Wick (high → low) */}
				<Line
					type="monotone"
					dataKey="high"
                    stroke="#4FCBA8"
                    strokeWidth={1}
                    dot={false}
                    activeDot={false}
                />
                <Line
                    type="monotone"
                    dataKey="low"
                    stroke="#4FCBA8"
                    strokeWidth={1}
                    dot={false}
                    activeDot={false}
                />

                {/* Body */}
                <Bar
                    dataKey={(d) => Math.abs(d.close - d.open)}
                    fill="#4FCBA8"
                    barSize={14}
                />

                <XAxis
                    dataKey="name"
                    stroke="#4FCBA833"
                    tick={{ fill: "#7A828A", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                />

                <YAxis hide domain={["auto", "auto"]} />

                <Tooltip content={<CandleTooltip />} />
            </ComposedChart>
        </ResponsiveContainer>
    );
}

export default CandlestickChart;
