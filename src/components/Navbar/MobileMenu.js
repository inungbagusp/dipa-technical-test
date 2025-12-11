import { useState } from "react";
import Image from "next/image";
import Container from "@/components/UI/Container";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    const [openSolutions, setOpenSolutions] = useState(false);

    return (
        <>
            <Container className="h-[70px] px-6 flex items-center justify-between">
                <Image src="/image/logo/logo.svg" width={140} height={22} alt="Moniveo" />

                {/* Hamburger */}
                <button onClick={() => setOpen(!open)}>
                    <Image src="/image/icon/hamburger.svg" width={24} height={24} alt="menu" />
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
                <div className="p-6 flex flex-col gap-4 text-[16px] ff-roobert">

                    <a className="py-2">Platform</a>

                    {/* Solutions accordion */}
                    <div>
                        <button
                            className="flex justify-between items-center w-full py-2"
                            onClick={() => setOpenSolutions(!openSolutions)}
                        >
                            Solutions
                            <Image
                                src="/image/icon/chevron-down.svg"
                                width={12}
                                height={12}
                                alt=""
                                className={`transition ${openSolutions ? "rotate-180" : ""}`}
                            />
                        </button>

                        {openSolutions && (
                            <div className="pl-4 flex flex-col gap-2">
                                <a className="py-1">Workflow Automation</a>
                                <a className="py-1">AI Agents</a>
                                <a className="py-1">Data Analytics</a>
                                <a className="py-1">Integrations</a>
                            </div>
                        )}
                    </div>

                    <a className="py-2">Resources</a>
                    <a className="py-2">Pricing</a>

                    <div className="mt-6 flex flex-col gap-3">
                        <button className="h-[48px] rounded-full border text-blue-900">
                            Login
                        </button>
                        <button className="h-[48px] rounded-full bg-blue-600 text-white">
                            Sign Up
                        </button>
                    </div>

                </div>
            </aside>
        </>
    );
}
