"use client";
import Image from "next/image";
import Container from "@/components/UI/Container";
import CardWebSearch from "@/components/CardWebSearch";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "@/utils/motion";

const Hero = () => {
    return (
        <section className={[
            "relative",
            "max-w-[1320px]",
            "h-[600px]",
            "mx-auto",
            "overflow-hidden",
            "pt-[24px]",
            "pb-[24px]",
            "border",
            "border-border-gray",
            "md:pt-[40px]",
            "md:pb-[40px]",
            "lg:h-[900px]",
            "xl:pt-[80px]",
            "xl:pb-[48px]",
        ].join(" ")}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src="/image/background/bg-home.png"
                    alt="Background Grid"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
            </div>

            <Container className="px-[20px] md:px-[40px] xl:px-[80px] flex items-start justify-between relative">
                {/* LEFT */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="text-center md:text-left"
                >
                    {/* Badge */}
                    <motion.div variants={fadeUp}>
                        <div className="text-center md:text-left inline-flex items-center gap-[6px] h-[32px] py-3 px-4 rounded-full bg-[#0542FC0F] mb-3">
                            <Image src="/image/icon/sparkle.svg" width={14} height={14} alt="AI Solution" />
                            <span className="ff-roobert text-[10px] lg:text-[12px] lh-150 ls-4 text-(--primary)">AI SOLUTION</span>
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={fadeUp}
                        className={[
                            "ff-roobert",
                            "text-[32px]",
                            "lh-120",
                            "ls-neg2",
                            "font-medium",
                            "text-center",
                            "text-(--text-gray-scale-900)",
                            "lg:ts-72",
                            "md:text-left",
                        ].join(" ")}
                    >
                        Turn workflow into <br />
                        <span className="text-(--primary)">AI agent</span> automations.
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={fadeUp}
                        className={[
                            "mt-5",
                            "ff-roobert",
                            "font-normal",
                            "ts-14",
                            "lh-160",
                            "text-center",
                            "text-(--text-black-soft)",
                            "max-w-[520px]",
                            "lg:text-[20px]!",
                            "md:text-left",
                        ].join(" ")}
                    >
                        Powerful and production-ready, our cloud platform has the solutions you need to succeed.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.button
                        variants={fadeUp}
                        className={[
                            "flex",
                            "items-center",
                            "gap-2",
                            "mt-8",
                            "h-[40px]",
                            "px-4",
                            "rounded-full",
                            "bg-linear-to-r",
                            "from-[#3C7BFF]",
                            "to-[#0542FC]",
                            "shadow-md",
                            "mx-auto",
                            "cursor-pointer",
                            "md:mx-0",
                            "lg:h-[60px]",
                            "lg:px-7",
                            "lg:mt-14"
                        ].join(" ")}
                    >
                        <span className={[
                            "ff-roobert",
                            "font-medium",
                            "ts-14",
                            "lh-150",
                            "ls-1",
                            "text-white",
                            "lg:text-[18px]!",
                        ].join(" ")}
                        >Get started</span>
                        <Image src="/image/icon/chevron-right.svg" width={20} height={20} alt="Arrow Right" />
                    </motion.button>
                </motion.div>
            </Container>

            {/* Card Web Search */}
            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="show"
                transition={{ delay: 1.2, duration: 0.6 }}
                className={[
                    "absolute",
                    "bottom-[20px]",
                    "right-0",
                    "w-full",
                    "px-[20px]",
                    "md:bottom-[48px]",
                    "md:right-[48px]",
                    "md:w-[380px]",
                    "md:px-0",
                    "lg:w-[480px]",
                ].join(" ")}
            >
                <CardWebSearch />
            </motion.div>

        </section>
    );
}

export default Hero;