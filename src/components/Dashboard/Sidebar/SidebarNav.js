import { dashboardNavItems1, dashboardNavItems2 } from "@/data/dashboard";
import Image from "next/image";

const SidebarNav = ({ activeNav, setActiveNav }) => {
	return (
		<nav className="flex flex-col gap-1">
			<div className="pb-3 mb-3 border-b border-(--sidebar-bg-light)">
				{dashboardNavItems1.map((item, idx) => (
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
			<div className="pb-3 mb-3 border-b border-(--sidebar-bg-light)">
				{dashboardNavItems2.map((item, idx) => (
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
		</nav>
	);
}

export default SidebarNav;
