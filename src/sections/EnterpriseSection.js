"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/motion";
import Image from "next/image";
import Container from "@/components/UI/Container";

const EnterpriseSection = () => {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden bg-[#0B1428]"
        >

            {/* BACKGROUND GRADIENT */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,73,255,0.25),transparent_60%)] pointer-events-none" />

            {/* CONTAINER */}
            <Container className={[
                "px-[24px]",
                "py-[40px]",
                "border-r",
                "border-l",
                "border-border-white-soft",
                "relative",
                "z-10",
                "md:px-[40px]",
                "md:py-[40px]",
                "xl:py-[100px]",
                "xl:px-[80px]",
            ].join(" ")}
            >
                <div
                    className={[
                        "absolute top-[10px] left-1/2",
                        "-translate-x-1/2 -translate-y-1/2",
                        "w-[800px] h-[350px]",
                        "bg-[#4875FF]",
                        "rounded-full",
                        "blur-[300px]",
                        "opacity-60",
                    ].join(" ")}
                />

                {/* TOP TEXT */}
                <motion.p
                    variants={fadeUp}
                    className={[
                        "text-center",
                        "font-medium",
                        "text-[14px]",
                        "lh-160",
                        "ls-4",
                        "text-transparent",
                        "bg-clip-text",
                        "bg-[linear-gradient(33deg,#93D2FF_-22.12%,#0542FC_33.96%)]",
                        "mb-2",
                        "lg:text-left",
                        "lg:text-[16px]",
                        "z-20"
                    ].join(" ")}
                >
                    AI + AUTOMATION
                </motion.p>

                <motion.h2
                    variants={fadeUp}
                    className={[
                        "text-center",
                        "text-[28px]",
                        "ff-roobert",
                        "font-medium",
                        "text-white",
                        "mb-14",
                        "lh-120",
                        "ls-neg2",
                        "lg:text-left",
                        "lg:text-[56px]",
                        "z-20"
                    ].join(" ")}
                >
                    Enterprise-ready <br /> automation in seconds
                </motion.h2>

                {/* GRID CARDS */}
                <motion.div
                    variants={staggerContainer}
                    className="flex flex-col gap-6"
                >
                    {/* ROW 1 */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* CARD 1 */}
                        <motion.div
                            variants={fadeUp}
                            className={[
                                "w-full",
                                "h-[300px]",
                                "border border-white/10",
                                "backdrop-blur-xl",
                                "rounded-3xl",
                                "p-4",
                                "relative",
                                "overflow-hidden",
                                "lg:w-[720px]",
                                "md:h-[400px]",
                                "md:p-8",
                                "bg-[#FFFFFF0A]",
                                "z-20"
                            ].join(" ")}
                        >
                            <div
                                className={[
                                    "absolute bottom-[10px] left-1/2",
                                    "-translate-x-1/2 -translate-y-1/2",
                                    "w-[400px] h-[400px]",
                                    "bg-[#4875FF]",
                                    "rounded-full",
                                    "blur-[300px]",
                                    "opacity-60",
                                ].join(" ")}
                            />
                            <h3 className={[
                                    "font-medium",
                                    "text-white",
                                    "text-[16px]",
                                    "lh-120",
                                    "ls-neg2",
                                    "mb-3",
                                    "md:text-[24px]",
                                ].join(" ")}
                            >
                                AI for the whole team
                            </h3>
                            <p className={[
                                "text-(--text-white-dim)",
                                "font-normal",
                                "text-[12px]",
                                "lh-160",
                                "ls-1",
                                "md:text-[18px]",
                                "max-w-[450px]",
                            ].join(" ")}
                            >
                                Bring workflow automation and AI to the entire organization with apps, chatbots, and integrations.
                            </p>

                            {/* PREVIEW IMAGE */}
                            <div className="flex justify-center mt-[50px]">
                                <div className="max-w-[440px] mx-auto rounded-2xl shadow-[0_12px_32px_0_rgba(0,0,0,0.08)]">
                                    <Image 
                                        src="/image/enterprise/enterprise-card-websearch.svg" 
                                        width={440}
                                        height={160}
                                        alt="Chat example"
                                        priority
                                    />
                                </div>
                            </div>

                            <Image 
                                src="/image/enterprise/enterprise-bg-vector.png" 
                                width={720}
                                height={180}
                                alt="bg vector"
                                className="absolute bottom-0 left-0"
                            />
                        </motion.div>

                        {/* CARD 2 */}
                        <motion.div
                            variants={fadeUp}
                            className={[
                                "w-full",
                                "h-[300px]",
                                "border border-white/10",
                                "backdrop-blur-xl",
                                "rounded-3xl",
                                "overflow-hidden",
                                "p-4",
                                "lg:pt-15",
                                "lg:px-10",
                                "lg:pb-10",
                                "lg:w-[416px]",
                                "md:h-[400px]",
                                "md:p-8",
                                "bg-[#FFFFFF0A]",
                                "z-20",
                                "relative",
                            ].join(" ")}
                        >
                            <div
                                className={[
                                    "absolute top-[100px] left-1/2",
                                    "-translate-x-1/2 -translate-y-1/2",
                                    "w-[400px] h-[200px]",
                                    "bg-[#4875FF]",
                                    "rounded-full",
                                    "blur-[300px]",
                                    "opacity-60",
                                ].join(" ")}
                            />
                            <div className="relative mb-5 mt-10 md:mt-0">
                                <Image 
                                    src="/image/enterprise/enterprise-flash.png"
                                    width={252}
                                    height={294}
                                    alt="flash"
                                    className="absolute top-[-160px] right-[-20px]"
                                />
                                <Image 
                                    src="/image/enterprise/security-banner.png"
                                    width={286}
                                    height={178}
                                    alt="Security"
                                    className="mx-auto w-[150px] h-auto md:w-[286px] md:h-[178px]"
                                />
                            </div>
                            <div>
                                <h3 className={[
                                        "font-medium",
                                        "text-white",
                                        "text-[16px]",
                                        "lh-120",
                                        "ls-neg2",
                                        "mb-3",
                                        "md:text-[24px]",
                                    ].join(" ")}
                                >
                                    Enterprise security
                                </h3>
                                <p className={[
                                        "text-(--text-white-dim)",
                                        "font-normal",
                                        "text-[12px]",
                                        "lh-160",
                                        "ls-1",
                                        "md:text-[18px]",
                                        "max-w-[336px]",
                                    ].join(" ")}
                                >
                                    Keep data safe with best-in-class protocols & AI guardrails.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">

                        {/* CARD 3 */}
                        <motion.div
                            variants={fadeUp}
                            className={[
                                "w-full",
                                "h-[300px]",
                                "border border-white/10",
                                "backdrop-blur-xl",
                                "rounded-3xl",
                                "p-4",
                                "relative",
                                "overflow-hidden",
                                "md:p-8",
                                "xl:p-10",
                                "lg:w-[496px]",
                                "md:h-[400px]",
                                "bg-[#FFFFFF0A]",
                                "z-20"
                            ].join(" ")}
                        >
                            <div
                                className={[
                                    "absolute bottom-[-200px] left-1/2",
                                    "-translate-x-1/2 -translate-y-1/2",
                                    "w-[600px] h-[200px]",
                                    "bg-[#4875FF]",
                                    "rounded-full",
                                    "blur-[300px]",
                                    "opacity-60",
                                ].join(" ")}
                            />
                            <h3 className={[
                                    "font-medium",
                                    "text-white",
                                    "text-[16px]",
                                    "lh-120",
                                    "ls-neg2",
                                    "mb-3",
                                    "md:text-[24px]",
                                ].join(" ")}
                            >
                                Integrate everything
                            </h3>
                            <p className={[
                                    "text-(--text-white-dim)",
                                    "font-normal",
                                    "text-[12px]",
                                    "lh-160",
                                    "ls-1",
                                    "md:text-[18px]",
                                    "max-w-[320px]",
                                ].join(" ")}
                            >
                                Connect any tool or LLM to orchestrate intelligent workflows.
                            </p>

                            <Image 
                                src="/image/enterprise/enterprise-integration.png"
                                width={330}
                                height={330}
                                alt="integrations"
                                className="absolute bottom-[-24px] left-1/2 -translate-x-1/2"
                            />
                        </motion.div>

                        {/* CARD 4 */}
                        <motion.div
                            variants={fadeUp}
                            className={[
                                "w-auto",
                                "h-[300px]",
                                "border border-white/10",
                                "backdrop-blur-xl",
                                "rounded-3xl",
                                "p-4",
                                "overflow-hidden",
                                "lg:w-[640px]",
                                "md:h-[400px]",
                                "md:p-8",
                                "xl:p-10",
                                "bg-[#FFFFFF0A]",
                                "z-20"
                            ].join(" ")}
                        >
                            <div
                                className={[
                                    "absolute bottom-[-200px] left-1/2",
                                    "-translate-x-1/2 -translate-y-1/2",
                                    "w-[600px] h-[200px]",
                                    "bg-[#4875FF]",
                                    "rounded-full",
                                    "blur-[300px]",
                                    "opacity-60",
                                ].join(" ")}
                            />
                            <h3 className={[
                                    "font-medium",
                                    "text-white",
                                    "text-[16px]",
                                    "lh-120",
                                    "ls-neg2",
                                    "mb-3",
                                    "md:text-[24px]",
                                ].join(" ")}
                            >
                                Fast and intuitive
                            </h3>
                            <p className={[
                                    "text-(--text-white-dim)",
                                    "font-normal",
                                    "text-[12px]",
                                    "lh-160",
                                    "ls-1",
                                    "max-w-[320px]",
                                    "md:text-[18px]",
                                ].join(" ")}
                            >
                                Build easily with drag and drop, low/no‑code and collaboration tools.
                            </p>

                            <Image 
                                src="/image/enterprise/enterprise-ai-chatbot.png"
                                width={544}
                                height={168}
                                alt="AI Chatbots"
                                className="mx-auto mt-11"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </motion.section>
    );
};

export default EnterpriseSection;
