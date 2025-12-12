"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { footerSections, socialLinks } from "@/data/footer";
import CopyRight from "@/components/Copyright";
import Container from "@/components/UI/Container";

const FooterMobile = () => {
    const [active, setActive] = useState(null);

    const toggle = (i) => {
        setActive(active === i ? null : i);
    };

    return (
        <>
            <footer className="bg-white px-6 py-10 border-t border-border-gray">
                {/* Collapsible sections */}
                <div className="flex flex-col gap-4">
                    {footerSections.map((section, i) => (
                        <div key={section.title}>

                            <button
                                className="w-full flex justify-between items-center py-3 text-left"
                                onClick={() => toggle(i)}
                            >
                                <span className="text-[16px] font-medium text-(--text-gray-scale-900)">
                                    {section.title}
                                </span>

                                <Image
                                    src="/image/icon/chevron-down.svg"
                                    width={18}
                                    height={18}
                                    alt=""
                                    className={`transition-transform ${
                                        active === i ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {/* Content */}
                            {active === i && (
                                <ul className="pl-4 pb-2 space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link 
                                                href={link.href}
                                                className="text-[14px] text-(--text-gray-muted)"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>
                    ))}
                </div>

                {/* Subscribe */}
                <div className="mt-8">
                    <h4 className="text-[16px] font-medium text-(--text-gray-scale-900) mb-3">Subscribe</h4>

                    <div className="flex items-center bg-[#F5F7FB] rounded-md h-[48px] overflow-hidden relative">
                        <input
                            placeholder="Your email"
                            className="bg-transparent px-4 ts-16 outline-none flex-1 text-gray-600 h-[48px]"
                        />
                        <Image
                            src="/image/icon/arrow-narrow-right.svg"
                            width={18}
                            height={18}
                            alt="arrow"
                            className="absolute right-4"
                        />
                    </div>
                </div>

                {/* Social Icons */}
                <div className="mt-8 flex justify-between">
                    <h4 className="text-[16px] font-medium text-(--text-gray-scale-900) mb-3">Follow Us</h4>
                    <div className="flex gap-4">
                        {socialLinks.map((item) => (
                            <Link key={item.icon} href={item.href}>
                                <Image 
                                    src={item.icon}
                                    width={20}
                                    height={20}
                                    alt="social"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </footer>
            <div className="bg-white">
                <Container className="mx-auto px-0!">
                    <CopyRight />
                </Container>
            </div>
        </>
    );
}

export default FooterMobile;
