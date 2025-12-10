"use client";
import Image from "next/image";
import Container from "@/components/UI/Container";
import CardWebSearch from "@/components/UI/CardWebSearch";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "@/utils/motion";

const Hero = () => {
    return (
        <section className="relative max-w-[1320px] h-[900px] mx-auto overflow-hidden pt-[80px] pb-[48px] border border-border-gray">

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

            <Container className="px-[80px] flex items-start justify-between relative">
                {/* LEFT */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >
                    {/* Badge */}
                    <motion.div variants={fadeUp}>
                        <div className="inline-flex items-center gap-[6px] h-[32px] py-3 px-4 rounded-full bg-[#EEF3FF] mb-3">
                            <Image src="/image/icon/sparkle.svg" width={14} height={14} alt="AI Solution" />
                            <span className="ff-roobert ts-12 lh-150 ls-4 text-(--primary)">AI SOLUTION</span>
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={fadeUp}
                        className="ff-roobert ts-72 lh-120 ls-neg2 font-medium text-(--text-gray-scale-900)"
                    >
                        Turn workflow into <br />
                        <span className="text-(--primary)">AI agent</span> automations.
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={fadeUp}
                        className="mt-5 ff-roobert font-normal ts-20 lh-160 text-(--text-black-soft) max-w-[520px]"
                    >
                        Powerful and production-ready, our cloud platform has the solutions you need to succeed.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.button
                        variants={fadeUp}
                        className="flex items-center gap-2 mt-14 h-[60px] px-7 rounded-full bg-linear-to-r from-[#3C7BFF] to-[#0542FC] shadow-md cursor-pointer"
                    >
                        <span className="ff-roobert font-medium ts-18 lh-150 ls-1 text-white">Get started</span>
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
                className="absolute bottom-[48px] right-[48px] w-[480px]"
            >
                <CardWebSearch />
            </motion.div>

        </section>
    );
}

export default Hero;