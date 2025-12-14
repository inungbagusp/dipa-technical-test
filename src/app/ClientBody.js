"use client";

import { usePathname } from "next/navigation";

export default function ClientBody({ children }) {
	const pathname = usePathname();
	const isDashboard = pathname.startsWith("/dashboard");

	return (
		<body className={isDashboard ? "bg-[#111316]" : "bg-white"}>
			{children}
		</body>
	);
}
