"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

import ToolkitSidebar from "@/components/ToolkitSidebar";
import ToolkitPreview from "@/components/ToolkitPreview";
import { toolkitItems } from "@/data/toolkit";
import Container from "@/components/UI/Container";

const ToolkitSection = () => {
	const [active, setActive] = useState("chatbots");

	return (
		<motion.section
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
		>
			<Container className={[
					"border-r",
					"border-l",
					"border-border-gray",
					"py-[40px]",
					"px-[24px]",
					"md:py-[40px]",
					"md:px-[40px]",
					"xl:py-[100px]",
					"xl:px-[80px]",
				].join(" ")}
			>
				
				<div className={[
					"flex",
					"flex-col-reverse",
					"lg:flex-row",
					"justify-between",
					"gap-[20px]",
					"items-center",
					"lg:gap-[80px]"
				].join(" ")}>
					{/* LEFT PREVIEW */}
					<motion.div 
						variants={{
							hidden: { opacity: 0, y: 20 },
							show: {
								opacity: 1,
								y: 0,
								transition: { duration: 1.2, ease: "easeOut" }
							}
						}}
					>
						<ToolkitPreview active={active} items={toolkitItems} />
					</motion.div>

					{/* RIGHT SIDEBAR NAV */}
					<motion.div 
						variants={{
							hidden: { opacity: 0, y: 20 },
							show: {
								opacity: 1,
								y: 0,
								transition: { duration: 1.2, ease: "easeOut" }
							}
						}}
					>
						<ToolkitSidebar
							active={active}
							setActive={setActive}
							items={toolkitItems}
						/>
					</motion.div>
				</div>
				
			</Container>
		</motion.section>
	);
};

export default ToolkitSection;
