
import { dashboardWatchlist } from "@/data/dashboard";
import Image from "next/image";

const SidebarWatchlist = () => {
	return (
		<div className="mb-6">
			<h3 className="ff-inter text-[11px] text-(--text-gray-muted) lh-150 ls-0 mb-2">MY WATCHLIST</h3>

			<div className="flex flex-col">
				{dashboardWatchlist.map((item) => (
					<div key={item.symbol} className="cursor-pointer flex gap-3 p-3 hover:bg-[linear-gradient(to_bottom,#2A3036CC,#2A303600)] transition-colors hover:rounded-[6px]">
						<Image
							src={item?.icon}
							alt={item?.symbol}
							width={24}
							height={24}
						/>
						<div className="flex flex-col">
							<span className="ff-inter text-[12px] font-normal lh-150 ls-0 text-(--text-gray-light)">{item.symbol}</span>
							<div className="flex items-center gap-1">
								<span className="ff-inter text-[14px] font-normal lh-150 ls-0 text-white">{item.price}</span>
								<div className="flex items-center justify-center gap-1 border border-[#23282F] bg-(--sidebar-bg-light) py-px px-[2px] rounded-[5px]">
									<span className={[
										"ff-intertight",
										"text-[12px]",
										"font-medium",
										"lh-150",
										"ls-0",
										item.status === "up" ? "text-[#4FCBA8]" : "text-[#F14E6D]"
									].join(" ")}>{item.change}</span>
									<Image
										src={
										item?.status === "up"
											? "/image/dashboard/icon-arrow-up-right.svg"
											: "/image/dashboard/icon-arrow-down-right.svg"
										}
										alt={item.status}
										width={14}
										height={14}
									/>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default SidebarWatchlist;
