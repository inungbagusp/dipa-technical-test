"use client";

import Container from "@/components/UI/Container";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
	const [openDropdown, setOpenDropdown] = useState(false);

	return (
    <header className="w-full bg-white border-b border-[#E5E9F1]/80">
		<Container className="h-[84px] px-[80px] flex items-center justify-between">
			
			{/* Logo */}
			<div className="flex items-center gap-2">
				<Image src="/image/logo/logo.svg" alt="Moniveo" width={156} height={24} />
			</div>

			{/* Navigation */}
			<nav className="flex items-center gap-8 font-roobert text-[16px]">
				<a href="#" className="ff-roobert font-regular ts-14 lh-150 ls-1 text-(--text-gray-scale-900) hover:text-blue-900">Platform</a>
				<div 
					className="relative cursor-pointer"
					onMouseEnter={() => setOpenDropdown(true)}
					onMouseLeave={() => setOpenDropdown(false)}
				>
					<button className=" cursor-pointer ff-roobert ts-14 lh-150 ls-1 text-(--text-gray-scale-900) flex items-center gap-1 hover:text-blue-900">
						Solutions 
						<Image 
							src="/image/icon/chevron-down.svg" 
							alt="Moniveo" 
							width={12} 
							height={12} 
							className={`transition-transform ${openDropdown ? "rotate-180" : ""}`}
						/>
					</button>
					{/* Dropdown Menu */}
					{openDropdown && (
						<div className="absolute top-[36px] left-0 w-[200px] z-50">
							<div className="absolute -top-4 inset-x-0 h-10"></div>
							<div className="relative bg-white shadow-lg rounded-lg border border-border-light py-2">
								<a className="block px-4 py-2 ts-14 text-(--text-gray-scale-900) hover:bg-[#F1F4F8] cursor-pointer">
									Workflow Automation
								</a>
								<a className="block px-4 py-2 ts-14 text-(--text-gray-scale-900) hover:bg-[#F1F4F8] cursor-pointer">
									AI Agents
								</a>
								<a className="block px-4 py-2 ts-14 text-(--text-gray-scale-900) hover:bg-[#F1F4F8] cursor-pointer">
									Data Analytics
								</a>
								<a className="block px-4 py-2 ts-14 text-(--text-gray-scale-900) hover:bg-[#F1F4F8] cursor-pointer">
									Integrations
								</a>
							</div>

						</div>
					)}

				</div>
				<a href="#" className="ff-roobert font-regular ts-14 lh-150 ls-1 text-(--text-gray-scale-900) hover:text-blue-900">Resources</a>
				<a href="#" className="ff-roobert font-regular ts-14 lh-150 ls-1 text-(--text-gray-scale-900) hover:text-blue-900">Pricing</a>
			</nav>

			{/* Buttons */}
			<div className="flex items-center gap-4 ml-6">
				<button className="h-[48px] w-[89px] px-6 py-2 rounded-full border border-border-light text-blue-900 font-roobert ts-14 lh-150 ls-1 text">
					Login
				</button>
				<button className="h-[48px] w-[105px] px-6 py-2 rounded-full text-white font-roobert ts-14 lh-150 ls-1 text bg-linear-to-r from-[#3C7BFF] to-[#0542FC] shadow-md">
					Sign Up
				</button>
			</div>

		</Container>
    </header>
  );
}

export default Navbar;
