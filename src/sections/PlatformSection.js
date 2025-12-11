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
                <Container className="relative pt-[100px] text-center border-r border-l border-border-gray">
                    {/* FLOATING TOP LEFT IMAGE */}
                    <motion.div
                        variants={fadeUp}
                        className="absolute left-[20%] top-[12%] -translate-x-1/2"
                    >
                        <Image
                            src="/image/platform/platform-left.png"
                            width={120}
                            height={82}
                            alt="platform-left"
                            className="drop-shadow-xl"
                        />
                    </motion.div>

                    {/* FLOATING TOP RIGHT IMAGE */}
                    <motion.div
                        variants={fadeUp}
                        className="absolute right-[20%] top-[20%] translate-x-1/2"
                    >
                        <Image
                            src="/image/platform/platform-right.png"
                            width={120}
                            height={82}
                            alt="platform-right"
                            className="drop-shadow-xl"
                        />
                    </motion.div>

                    <div className="max-w-[560px] mx-auto">
                        {/* LABEL */}
                        <motion.p
                            variants={fadeUp}
                            className="font-medium ts-16 lh-160 ls-4 text-(--primary) mb-2 uppercase"
                        >
                            The Platform
                        </motion.p>

                        {/* HEADING */}
                        <motion.h2
                            variants={fadeUp}
                            className="ts-56 font-medium text-(--text-black) lh-120 ls-neg2 mb-5"
                        >
                            Connected AI <br /> orchestration platform
                        </motion.h2>

                        {/* SUBTEXT */}
                        <motion.p
                            variants={fadeUp}
                            className="ts-20 lh-160 ls-0 font-normal text-(--text-gray-muted) max-w-[520px] mx-auto"
                        >
                            Powerful and production-ready, our cloud platform has the solutions you need to succeed.
                        </motion.p>
                    </div>

                    {/* WORKFLOW IMAGE */}
                    <motion.div variants={fadeUp} className="mt-[56px] flex justify-center">
                        <Image
                            src="/image/platform/platform-dashboard.png"
                            alt="platform-main"
                            width={1080}
                            height={572}
                            className="w-full h-auto"
                            priority
                        />
                    </motion.div>

                </Container>
            </div>
        </motion.section>
    );
};

export default PlatformSection;
