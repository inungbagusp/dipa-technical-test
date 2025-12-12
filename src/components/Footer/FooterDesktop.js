"use client";

import Image from "next/image";
import Link from "next/link";
import { footerSections, socialLinks } from "@/data/footer";
import Container from "@/components/UI/Container";
import CopyRight from "@/components/Copyright";

const FooterDesktop = () => {
    return (
        <>
            <footer className="border-b border-border-gray bg-white">
                <Container className={[
                    "container",
                    "mx-auto",
                    "px-[40px]",
                    "py-[40px]",
                    "border-r",
                    "border-l",
                    "border-border-gray",
                    "xl:px-[80px]",
                    "xl:py-[64px]",
                ].join(" ")}>
                    <div className="flex gap-10">
                        {/* 4 Columns */}
                        {footerSections.map((section) => (
                            <div className="w-[185px]" key={section.title}>
                                <h4 className="text-(--text-gray-scale-900) ts-18 leading-[28px] ls-1 font-medium mb-4">{section.title}</h4>

                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="ts-14 leading-[20px] font-normal text-(--text-gray-muted) hover:text-(--text-gray-scale-900) transition"
                                            >
                                            {link.label}
                                        </Link>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Subscribe */}
                        <div className="w-[260px]">
                            <h4 className="text-(--text-gray-scale-900) ts-18 leading-[28px] ls-1 font-medium mb-4">Subscribe</h4>
                            <div className="flex items-center bg-[#F5F7FB] rounded-md h-[56px] overflow-hidden mb-8 relative">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-transparent px-4 ts-16 outline-none flex-1 text-gray-600 h-[48px]"
                                />
                                <Image
                                    src="/image/icon/arrow-narrow-right.svg"
                                    width={18}
                                    height={18}
                                    alt="subscribe"
                                    className="absolute right-4 cursor-pointer"
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <h4 className="text-(--text-gray-scale-900) ts-18 leading-[28px] ls-1 font-medium">Follow Us</h4>

                                <div className="flex items-center gap-4">
                                    {socialLinks.map((item) => (
                                        <Link
                                            key={item.icon}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src={item.icon}
                                                width={20}
                                                height={20}
                                                alt="social icon"
                                                className="cursor-pointer hover:opacity-80 transition hover:fill-[#5C8DFF]"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
            <div className="bg-white">
                <Container className="mx-auto px-0!">
                    <CopyRight />
                </Container>
            </div>
        </>
    );
};

export default FooterDesktop;
