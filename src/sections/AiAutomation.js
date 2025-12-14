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
                        src="/image/background/bg-ai-automation.webp"
                        alt="cta background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

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
                        <span className={[
                            "bg-[linear-gradient(246deg,#93D2FF_61.46%,#1956FF_93.83%)]",
                            "bg-clip-text",
                            "text-transparent",
                        ].join(" ")}>AI agent</span> automations.
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
                            "border border-[#0542FC]",
                            "bg-[linear-gradient(181deg,#93D2FF_-43.42%,#0542FC_99.17%)]",
                            "shadow-[inset_0_2px_1px_rgba(255,255,255,0.24)]",
                            "hover:bg-[linear-gradient(73deg,#93D2FF_-0.63%,#0C46F8_46.2%)]",
                            "hover:shadow-[1px_2px_18px_rgba(0,0,0,0.08),inset_0_2px_1px_rgba(255,255,255,0.24)]",
                            "transition-all duration-200",
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
