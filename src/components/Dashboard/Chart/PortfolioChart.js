"use client";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid
} from "recharts";

import PortfolioTooltip from "@/components/Dashboard/Chart/LineTooltip";

const PortfolioChart = ({ chartData }) => {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart
				data={chartData}
				margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
			>
				<CartesianGrid stroke="#2A3036" strokeDasharray="4 4" vertical={false} />

				<defs>
					<linearGradient id="greenGradient" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0%" stopColor="#8ADDC6" />
						<stop offset="100%" stopColor="#4FCBA8" />
					</linearGradient>
				</defs>

				<Line
					type="monotone"
					dataKey="value"
					stroke="url(#greenGradient)"
					strokeWidth={2.5}
					dot={false}
					activeDot={{ r: 5, fill: "#4FCBA8" }}
				/>

				<XAxis
					dataKey="name"
					stroke="#4FCBA833"
					tick={{ fill: "#7A828A", fontSize: 12 }}
					axisLine={false}
					tickLine={false}
				/>

				<YAxis
					stroke="#4FCBA833"
					tick={{ fill: "#7A828A", fontSize: 12 }}
					ticks={[0, 80, 160, 240, 320]}
					axisLine={false}
					tickLine={false}
				/>

				<Tooltip content={<PortfolioTooltip />} />
			</LineChart>
		</ResponsiveContainer>
	);
}

export default PortfolioChart;
