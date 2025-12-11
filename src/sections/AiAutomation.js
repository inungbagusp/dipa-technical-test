"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/utils/motion";
import Container from "@/components/UI/Container";

const AiAutomation = () => {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="border-t border-b border-border-gray"
        >
            {/* BACKGROUND IMAGE */}
            <Container className={[
                    "py-[40px]",
                    "px-[24px]",
                    "border-r",
                    "border-l",
                    "border-border-white-soft",
                    "relative",
                    "z-10",
                    "md:px-[40px]",
                    "xl:py-[100px]",
                    "xl:max-h-[534px]",
                ].join(" ")}
            >
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/image/background/bg-ai-automation.png"
                        alt="cta background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="absolute inset-0 z-10 bg-linear-to-b from-[#0B122A]/40 via-[#0D152F]/30 to-[#0E182F]/50" />

                {/* CONTENT */}
                <div className="relative z-11 max-w-[805px] mx-auto text-center">
                    <motion.h2
                        variants={fadeUp}
                        className={[
                            "text-white",
                            "text-[32px]",
                            "lh-120",
                            "ls-neg2",
                            "font-medium",
                            "md:text-[40px]",
                            "lg:text-[56px]",
                            "xl:text-[64px]",
                        ].join(" ")}
                    >
                        Turn workflow into <br />
                        <span className="text-[#5C8DFF]">AI agent</span> automations.
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className={[
                            "font-normal",
                            "text-[14px]",
                            "lh-160",
                            "ls-1",
                            "mt-5",
                            "text-white/64",
                            "max-w-[520px]",
                            "mx-auto",
                            "xl:text-[20px]",
                        ].join(" ")}
                    >
                        Powerful and production-ready, our cloud platform has the solutions you
                        need to succeed.
                    </motion.p>

                    <motion.button
                        variants={fadeUp}
                        className={[
                            "flex",
                            "items-center",
                            "gap-2",
                            "mt-9",
                            "h-[48px]",
                            "px-4",
                            "rounded-full",
                            "bg-linear-to-r",
                            "from-[#3C7BFF]",
                            "to-[#0542FC]",
                            "shadow-md",
                            "cursor-pointer",
                            "mx-auto",
                            "xl:h-[60px]",
                            "xl:px-7",
                        ].join(" ")}
                    >
                        <span className={[
                            "ff-roobert",
                            "font-medium",
                            "text-[14px]",
                            "lh-150",
                            "ls-1",
                            "text-white",
                            "xl:text-[18px]",
                        ].join(" ")}
                        >
                            Get started
                        </span>
                        <Image src="/image/icon/chevron-right.svg" width={20} height={20} alt="Arrow Right" />
                    </motion.button>
                </div>
            </Container>
        </motion.section>
    );
};

export default AiAutomation;
