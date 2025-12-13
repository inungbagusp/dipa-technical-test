"use client";

import SidebarUser from "./SidebarUser";
import SidebarNav from "./SidebarNav";
import SidebarWatchList from "./SidebarWatchList";
import SidebarFooter from "./SidebarFooter";
import Image from "next/image";

const Sidebar = () => {
	return (
		<aside className="w-[240px] px-[12px] py-[16px] bg-[#191D21] h-screen fixed left-0 top-0 flex flex-col overflow-y-scroll">
		
			{/* Logo */}
			<div className="flex items-center gap-3 h-[48px] mb-2">
				<Image src="/image/dashboard/logo-dasboard.svg" width={32} height={32} alt="Logo dashboard" />
				<h4 className="ff-kumbh font-semibold text-[18px] lh-100 ls-0">StableVault</h4>
			</div>

			<SidebarUser />
			<SidebarNav />
			<SidebarWatchList />
			<SidebarFooter />
		</aside>
	);
}

export default Sidebar;
