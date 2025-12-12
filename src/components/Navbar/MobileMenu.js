import { useState } from "react";
import Image from "next/image";
import Container from "@/components/UI/Container";
import Link from "next/link";

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const [openSolutions, setOpenSolutions] = useState(false);

    return (
        <>
            <Container className="h-[70px] px-6 flex items-center justify-between">
                <Link href="/">
                    <Image src="/image/logo/logo.svg" width={140} height={22} alt="Moniveo" />
                </Link>

                {/* Hamburger */}
                <button onClick={() => setOpen(!open)} className="cursor-pointer">
                    <Image src="/image/icon/burger-menu.svg" width={24} height={24} alt="menu" />
                </button>
            </Container>

            {/* Slide Menu */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
                    open ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setOpen(false)}
            />

            <aside
                className={`fixed right-0 top-0 h-full w-[75%] bg-white z-50 shadow-lg transition-transform ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="p-6 flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-4 text-[16px] ff-roobert">
                        <a className="py-2 ts-16 lh-150 ls-1 text-(--text-gray-scale-900)">Platform</a>
                        {/* Solutions accordion */}
                        <div>
                            <button
                                className="flex justify-between items-center w-full py-2"
                                onClick={() => setOpenSolutions(!openSolutions)}
                            >
                                <span className="font-normal ts-16 lh-150 ls-1 text-(--text-gray-scale-900)">Solutions</span>
                                <Image
                                    src="/image/icon/chevron-down.svg"
                                    width={24}
                                    height={24}
                                    alt=""
                                    className={`transition ${openSolutions ? "rotate-180" : ""}`}
                                />
                            </button>
                            {openSolutions && (
                                <div className="pl-4 flex flex-col gap-2">
                                    <a className="py-1 ts-14 lh-150 ls-1 text-(--text-gray-scale-900)">Workflow Automation</a>
                                    <a className="py-1 ts-14 lh-150 ls-1 text-(--text-gray-scale-900)">AI Agents</a>
                                    <a className="py-1 ts-14 lh-150 ls-1 text-(--text-gray-scale-900)">Data Analytics</a>
                                    <a className="py-1 ts-14 lh-150 ls-1 text-(--text-gray-scale-900)">Integrations</a>
                                </div>
                            )}
                        </div>
                        <a className="py-2 ts-16 lh-150 ls-1 text-(--text-gray-scale-900)">Resources</a>
                        <a className="py-2 ts-16 lh-150 ls-1 text-(--text-gray-scale-900)">Pricing</a>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                        <Link href="/login">
                            <button
                                onClick={() => setOpen(false)}
                                className="w-full h-[48px] rounded-full border border-border-light text-(--text-gray-scale-800)">
                                Login
                            </button>
                        </Link>
                        <Link href="/signup">
                            <button
                                onClick={() => setOpen(false)}
                                className="w-full h-[48px] rounded-full bg-linear-to-r from-[#3C7BFF] to-[#0542FC] shadow-md text-white">
                                Sign Up
                            </button>
                        </Link>
                    </div>

                </div>
            </aside>
        </>
    );
}

export default MobileMenu;
