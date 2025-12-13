"use client";

import Image from "next/image";
import SidebarUser from "./SidebarUser";
import SidebarNav from "./SidebarNav";
import SidebarWatchList from "./SidebarWatchList";
import SidebarFooter from "./SidebarFooter";

export default function SidebarMobile({ isOpen, setIsOpen }) {
    return (
        <>
            {/* OVERLAY */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* DRAWER SIDEBAR */}
            <aside
                className={`
                    fixed left-0 top-0 h-full w-[75%] max-w-[260px] bg-[#191D21] z-50 
                    transition-transform duration-300 lg:hidden
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                {/* Close Button */}
                <button
                    className="absolute right-4 top-6 text-white text-xl"
                    onClick={() => setIsOpen(false)}
                >
                    ✕
                </button>

                <div className="px-[12px] py-[16px] overflow-y-scroll">
                    <div className="h-[calc(100vh-48px)]">
                        {/* Logo */}
                        <div className="flex items-center gap-3 h-[48px] mb-4">
                            <Image src="/image/dashboard/logo-dasboard.svg" width={32} height={32} alt="Logo" />
                            <h4 className="ff-kumbh font-semibold text-[18px] text-white">StableVault</h4>
                        </div>

                        <SidebarUser />
                        <SidebarNav />
                        <SidebarWatchList />
                        <SidebarFooter />
                    </div>
                </div>
            </aside>
        </>
    );
}
