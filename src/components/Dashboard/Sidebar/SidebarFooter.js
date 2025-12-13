import { dashboardFooter } from "@/data/dashboard";
import Image from "next/image";

const SidebarFooter = () => {
	return (
		<nav className="flex flex-col mt-auto ">
			<div className="pb-3 mb-3 border-b border-(--sidebar-bg-light)">
				{dashboardFooter.map((item, idx) => (
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
			<div className="relative overflow-hidden w-full h-[204px] p-4 rounded-[12px] bg-(--sidebar-bg-light)">
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
					className="absolute w-full top-[-38px] right-[-8px]"
				/>
				<div className="mt-2">
					<h4 className="ff-intertight font-semibold text-[14px] lh-150 ls-0 text-white mb-[2px]">Earn while you sleep</h4>
					<p className="ff-inter font-normal text-[14px] lh-150 ls-0 text-(--text-gray-light)">Put your idle crypto to work with flexible yield options.</p>
				</div>
				<button className="flex items-center cursor-pointer mt-3 py-1 px-3 rounded-[6px] bg-[linear-gradient(to_bottom,#576470CC,#57647000)]">
					<span className="ff-intertight font-medium text-[12px] lh-150 ls-0 text-white">Get Started</span>
				</button>
			</div>
		</nav>
	);
}

export default SidebarFooter;
