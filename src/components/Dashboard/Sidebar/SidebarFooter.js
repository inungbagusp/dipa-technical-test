import { dashboardFooter } from "@/data/dashboard";
import Image from "next/image";

const SidebarFooter = ({ activeNav, setActiveNav }) => {
	return (
		<nav className="flex flex-col mt-auto ">
			<div className="pb-3 mb-3 border-b border-(--sidebar-bg-light)">
				{dashboardFooter.map((item, idx) => (
					<button
						key={idx}
						onClick={() => setActiveNav(item.label)}
						className={[
							"w-full flex items-center gap-3 px-3 py-2 rounded-md transition text-border-gray hover:text-white mb-1 h-[32px]",
							"hover:bg-[linear-gradient(to_bottom,rgba(42,48,54,0.80)_0%,rgba(42,48,54,1)_100%)]",
							"cursor-pointer",
							activeNav === item.label &&
							"rounded-[6px] border border-[rgba(255,255,255,0.02)] bg-[linear-gradient(169deg,rgba(42,48,54,0.80)_7.14%,#2A3036_181.56%)] shadow-[inset_0_0_0_1px_rgba(10,13,18,0.16),0_1px_2px_rgba(17,23,30,0.28),inset_0_-2px_2px_rgba(10,13,18,0.04)]",
						].join(" ")}
					>
						<Image
							src={activeNav === item?.label ? item?.iconActive : item?.icon}
							alt={item?.label}
							width={16}
							height={16}
						/>
						<span className={[
							"ff-inter",
							"text-[14px]",
							"lh-150",
							"ls-0",
							activeNav === item?.label ? "text-white font-medium" : "text-border-gray font-normal",
						].join(" ")}>{item?.label}</span>
					</button>
				))}
			</div>
			<div className="relative overflow-hidden w-full h-[204px] p-3 rounded-[12px] bg-(--sidebar-bg-light) border border-[#2A3036]">
				<Image src="/image/dashboard/3d-coin.svg" alt="3d coin" width={68} height={58} />
				<Image
					src="/image/dashboard/dots-nav-footer.png"
					alt="dots"
					width={161}
					height={113}
					className="absolute top-[-30px] right-[-30px]"
				/>
				<Image
					src="/image/dashboard/gradient-nav-footer.png"
					alt="gradient"
					width={177}
					height={182}
					className="absolute w-full top-[-38px] right-0"
				/>
				<div>
					<h4 className="ff-intertight font-semibold text-[14px] lh-150 ls-0 text-white mb-[2px]">Earn while you sleep</h4>
					<p className="ff-inter font-normal text-[14px] lh-150 ls-0 text-(--text-gray-light)">Put your idle crypto to work with flexible yield options.</p>
				</div>
				<button className={[
					"flex items-center cursor-pointer mt-5 py-1 px-3 rounded-[6px]",
					"bg-[linear-gradient(to_bottom,#576470CC,#57647000)]",
					"hover:bg-[linear-gradient(to_top,#576470CC,#57647000)]",
					"transition-all duration-200",
				].join(" ")}
				>
					<span className="ff-intertight font-medium text-[12px] lh-150 ls-0 text-white">Get Started</span>
				</button>
			</div>
		</nav>
	);
}

export default SidebarFooter;
