const PortfolioTooltip = ({ active, payload, label }) => {
	if (!active || !payload || !payload.length) return null;
	const value = payload[0].value;

	return (
		<div className="bg-[#1A1D21] border border-[#2A3036] px-4 py-3 rounded-xl shadow-lg min-w-[220px]">
		
			<p className="text-[#CDD5E0] text-[11px] ff-inter font-normal lh-150 ls-0 mb-2">{`${label}, 2025`}</p>

			<div className="flex items-center justify-between text-[13px] mb-1">
				<div className="flex items-center gap-2">
					<span className="w-[8px] h-[8px] bg-[#25A17E] rounded-full"></span>
					<span className="text-[#97A3B6] ff-inter font-medium text-[10px] lh-150 ls-0">Portfolio’s worth</span>
				</div>
				<span className="text-white font-medium ff-intertight text-[12px] lh-150 ls-0">
					${value.toLocaleString()}
				</span>
			</div>

			<div className="flex items-center justify-between text-[13px]">
				<div className="flex items-center gap-2">
					<span className="w-[8px] h-[8px] bg-[#17C8CC] rounded-full"></span>
					<span className="text-[#97A3B6] ff-inter font-medium text-[10px] lh-150 ls-0">Top movers</span>
				</div>
				<span className="text-white font-medium ff-intertight text-[12px] lh-150 ls-0">BTC & ETH</span>
			</div>
		</div>
	);
};

export default PortfolioTooltip;
