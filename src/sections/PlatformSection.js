"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/motion";
import Image from "next/image";
import Container from "@/components/UI/Container";

const PlatformSection = () => {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="bg-platform-gradient">
                <Container className={[
                    "relative",
                    "pt-[24px]",
                    "px-[24px]",
                    'pb-0',
                    "text-center",
                    "border-r",
                    "border-l",
                    "border-border-gray",
                    "md:pt-[40px]",
                    "md:px-[40px]",
                    "xl:pt-[100px]",
                ].join(" ")}
                >
                    {/* FLOATING TOP LEFT IMAGE */}
                    <motion.div
                        variants={fadeUp}
                        className="absolute top-[10%] left-[14%] lg:left-[20%] lg:top-[12%] -translate-x-1/2"
                    >
                        <Image
                            src="/image/platform/platform-left.png"
                            width={120}
                            height={82}
                            alt="platform-left"
                            className="drop-shadow-xl z-1 h-auto w-[80px] lg:w-[120px] lg:h-[82px]"
                        />
                    </motion.div>

                    {/* FLOATING TOP RIGHT IMAGE */}
                    <motion.div
                        variants={fadeUp}
                        className="absolute right-[10%] top-[14%] translate-x-1/2 lg:right-[20%] lg:top-[20%]"
                    >
                        <Image
                            src="/image/platform/platform-right.png"
                            width={120}
                            height={82}
                            alt="platform-right"
                            className="drop-shadow-xl z-1 h-auto w-[80px] lg:w-[120px] lg:h-[82px]"
                        />
                    </motion.div>

                    <div className="max-w-[560px] mx-auto z-10">
                        {/* LABEL */}
                        <motion.p
                            variants={fadeUp}
                            className={[
                                "font-medium",
                                "text-[14px]",
                                "lh-160",
                                "ls-4",
                                "text-(--primary)",
                                "mb-2",
                                "uppercase",
                                "lg:text-[16px]",
                            ].join(" ")}
                        >
                            The Platform
                        </motion.p>

                        {/* HEADING */}
                        <motion.h2
                            variants={fadeUp}
                            className={[
                                "text-[28px]",
                                "font-medium",
                                "text-(--text-black)",
                                "lh-120",
                                "ls-neg2",
                                "mb-5",
                                "lg:text-[56px]",
                            ].join(" ")}
                        >
                            Connected AI <br /> orchestration platform
                        </motion.h2>

                        {/* SUBTEXT */}
                        <motion.p
                            variants={fadeUp}
                            className={[
                                "text-[14px]",
                                "lh-160",
                                "ls-0",
                                "font-normal",
                                "text-(--text-gray-muted)",
                                "max-w-[520px]",
                                "mx-auto",
                                "lg:text-[20px]",
                            ].join(" ")}
                        >
                            Powerful and production-ready, our cloud platform has the solutions you need to succeed.
                        </motion.p>
                    </div>

                    {/* WORKFLOW IMAGE */}
                    <motion.div variants={fadeUp} className="mt-[20px] lg:mt-[56px] mx-auto">
                        <img
                            src="/image/platform/platform-dashboard.png"
                            alt="platform-main"
                            className="w-full"
                        />
                    </motion.div>

                </Container>
            </div>
        </motion.section>
    );
};

export default PlatformSection;
