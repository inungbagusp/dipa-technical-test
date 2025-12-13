"use client";

const ChartFilter = ({ activeRange, setActiveRange }) => {
	const filters = ["All", "1W", "1M", "3M", "6M", "1Y"];

	return (
		<div className="flex items-center gap-[2px] bg-[#111418] px-[10px] py-[3px] rounded-md border border-[#1C2127]">
			{filters.map((item) => {
				const isActive = activeRange === item;

				return (
					<button
						key={item}
						onClick={() => setActiveRange(item)}
						className={[
						"px-3 py-[3px] rounded-md text-[12px] font-medium transition-colors cursor-pointer",
						isActive
							? "bg-[#1A1D21] text-white border border-[#2A3036]"
							: "text-[#7A828A] hover:text-white"
						].join(" ")}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
}

export default ChartFilter;
