import { dashboardNavItems1, dashboardNavItems2 } from "@/data/dashboard";
import Image from "next/image";

const SidebarNav = () => {
	return (
		<nav className="flex flex-col gap-1">
			<div className="pb-3 mb-3 border-b border-(--sidebar-bg-light)">
				{dashboardNavItems1.map((item, idx) => (
					<button
						key={idx}
						className={[
							"w-full",
							"cursor-pointer",
							"flex",
							"items-center",
							"gap-3",
							"px-3",
							"py-2",
							"rounded-md",
							"hover:bg-[linear-gradient(to_bottom,#2A3036CC,#2A303600)]",
							"text-border-gray",
							"hover:text-white",
							"transition"
						].join(" ")}
					>
						<Image
							src={item?.icon}
							alt={item?.label}
							width={16}
							height={16}
						/>
						<span className={[
							"ff-inter",
							"font-medium",
							"text-[14px]",
							"lh-150",
							"ls-0",
						].join(" ")}>{item?.label}</span>
					</button>
				))}
			</div>
			<div className="pb-3 mb-3 border-b border-(--sidebar-bg-light)">
				{dashboardNavItems2.map((item, idx) => (
					<button
						key={idx}
						className={[
							"w-full",
							"cursor-pointer",
							"flex",
							"items-center",
							"gap-3",
							"px-3",
							"py-2",
							"rounded-md",
							"hover:bg-[linear-gradient(to_bottom,#2A3036CC,#2A303600)]",
							"text-border-gray",
							"hover:text-white",
							"transition"
						].join(" ")}
					>
						<Image
							src={item?.icon}
							alt={item?.label}
							width={16}
							height={16}
						/>
						<span className="ff-inter font-medium text-[14px] lh-150 ls-0">{item?.label}</span>
					</button>
				))}
			</div>
		</nav>
	);
}

export default SidebarNav;
