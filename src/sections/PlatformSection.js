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
            className={[
                "bg-white"
            ].join(" ")}
        >
            <div className="relative">
                <Container className={[
                    "relative",
                    "pt-[24px]",
                    "px-[24px]",
                    'pb-0',
                    "text-center",
                    "md:pt-[40px]",
                    "md:px-[40px]",
                    "xl:pt-[100px]",
                    "border-l border-r border-(--Grayscale-200---Divider,#E3E8EF)",
                    "bg-[linear-gradient(180deg,#FFF_0%,#F5F8FF_100%)]",
                ].join(" ")}
                >
                    {/* FLOATING TOP LEFT IMAGE */}
                    <motion.div
                        variants={fadeUp}
                        className="absolute top-[10%] left-[14%] lg:left-[20%] lg:top-[12%] -translate-x-1/2"
                    >
                        <Image
                            src="/image/platform/platform-left.svg"
                            width={120}
                            height={82}
                            alt="platform-left"
                            className="z-1 h-auto w-[50px] lg:w-[120px] lg:h-[82px]"
                        />
                    </motion.div>

                    {/* FLOATING TOP RIGHT IMAGE */}
                    <motion.div
                        variants={fadeUp}
                        className="absolute right-[10%] top-[14%] translate-x-1/2 lg:right-[20%] lg:top-[20%]"
                    >
                        <Image
                            src="/image/platform/platform-right.svg"
                            width={120}
                            height={82}
                            alt="platform-right"
                            className="z-1 h-auto w-[50px] lg:w-[120px] lg:h-[82px]"
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
                        <div className={[
                            "flex",
                            "max-w-[1080px]",
                            "mx-auto",
                            "w-full",
                            "rounded-tl-[16px] rounded-tr-[16px] border border-border-gray shadow-[0_4px_100px_rgba(11,19,46,0.12)]",
                            "relative"
                        ].join(" ")}> 
                            <Image
                                src="/image/platform/platform-dashboard.svg"
                                alt="platform-main"
                                width={1080}
                                height={572}
                                className="w-full h-auto"
                                priority
                            />
                            <div className={[
                                "w-[300px] lg:w-[800px] xl:w-[1000px]",
                                "h-[2px]",
                                "absolute bottom-[-2px] left-1/2 -translate-x-1/2",
                                "bg-[linear-gradient(90deg,rgba(147,210,255,0)_0%,#93D2FF_25%,#0542FC_50%,#93D2FF_75%,rgba(147,210,255,0)_100%)]",
                            ].join(" ")} />
                        </div>
                    </motion.div>

                </Container>
            </div>
        </motion.section>
    );
};

export default PlatformSection;
