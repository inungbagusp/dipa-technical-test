
import Image from "next/image";

const SidebarUser = () => {
	return (
		<div
			className={[
				"flex",
				"justify-between",
				"items-center",
				"gap-3",
				"mb-6",
				"border",
				"border-[#23282F]",
				"bg-(--sidebar-bg-light)",
				"hover:bg-(--sidebar-bg)",
				"transition-colors",
				"rounded-[6px]",
				"py-2",
				"px-3",
			].join(" ")}
		>
			<div className="flex items-center gap-2">
				<Image
					src="/image/dashboard/avatar.svg"
					alt="User"
					width={32}
					height={32}
					className="rounded-full object-cover"
				/>
				<div>
					<p className="ff-inter font-medium text-[14px] lh-150 ls-0 text-white">Giyu Tomizawa</p>
					<p className="ff-inter font-normal text-[12px] lh-150 ls-0 text-(--text-gray-lighter)">giyu@mail.com</p>
				</div>
			</div>
			<Image
				src="/image/dashboard/chevron-selector-vertical.svg"
				alt="chevron"
				width={16}
				height={16}
				className="rounded-full object-cover"
			/>
		</div>
	);
}

export default SidebarUser;
