"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/motion";
import Image from "next/image";
import Container from "@/components/UI/Container";
import CardWebSearch from "@/components/UI/CardWebSearch";

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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,73,255,0.25),transparent_60%)] pointer-events-none"></div>

            {/* CONTAINER */}
            <Container className="max-w-[1320px] mx-auto px-[80px] py-[100px] border-r border-l border-border-white-soft relative z-10">
                
                {/* TOP TEXT */}
                <motion.p
                    variants={fadeUp}
                    className="ff-roobert font-medium ts-16 lh-160 ls-4 text-transparent bg-clip-text bg-linear-to-r from-[#93D2FF] to-[#124FF8] mb-2"
                >
                    AI + AUTOMATION
                </motion.p>

                <motion.h2
                    variants={fadeUp}
                    className="ts-56 ff-roobert font-medium text-white mb-14 lh-120 ls-neg2"
                >
                    Enterprise-ready <br /> automation in seconds
                </motion.h2>

                {/* GRID CARDS */}
                <motion.div
                    variants={staggerContainer}
                    className="flex flex-col gap-6"
                >
                    {/* ROW 1 */}
                    <div className="flex gap-6">
                        {/* CARD 1 */}
                        <motion.div
                            variants={fadeUp}
                            className="w-[720px] h-[400px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden"
                        >
                            <h3 className="ff-roobert font-medium text-white ts-24 lh-120 ls-neg2 mb-3">AI for the whole team</h3>
                            <p className="text-(--text-white-dim) font-normal ts-18 lh-160 ls-1 max-w-[400px]">
                                Bring workflow automation and AI to the entire organization.
                            </p>

                            {/* PREVIEW IMAGE */}
                            <div className="flex justify-center mt-[50px]">
                                <Image 
                                    src="/image/enterprise/enterprise-web-search.png" 
                                    width={440}
                                    height={160}
                                    alt="Chat example"
                                />
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
                            className="w-[416px] h-[400px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl pt-15 px-10 pb-10 overflow-hidden"
                        >
                            <div className="relative mb-5">
                                <Image 
                                    src="/image/enterprise/enterprise-flash.png"
                                    width={252}
                                    height={294}
                                    alt="flash"
                                    className="absolute top-[-170px] right-[-20px]"
                                />
                                <Image 
                                    src="/image/enterprise/enterprise-security-v2.png"
                                    width={286}
                                    height={178}
                                    alt="Security"
                                    className="mx-auto"
                                />
                            </div>
                            <div>
                                <h3 className="text-white font-medium ts-24 lh-120 ls-neg2 mb-3">Enterprise security</h3>
                                <p className="text-(--text-white-dim) font-normal ts-18 lh-160 ls-1 max-w-[336px]">
                                    Keep data safe with best-in-class protocols & AI guardrails.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex gap-6">

                        {/* CARD 3 */}
                        <motion.div
                            variants={fadeUp}
                            className="w-[496px] h-[400px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 relative overflow-hidden"
                        >
                            <h3 className="text-white font-medium ts-24 lh-120 ls-neg2 mb-3">Integrate everything</h3>
                            <p className="text-(--text-white-dim) font-normal ts-18 lh-160 ls-1 max-w-[320px]">
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
                            className="w-[640px] h-[400px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 overflow-hidden"
                        >
                            <h3 className="text-white font-medium ts-24 lh-120 ls-neg2 mb-3">Fast and intuitive</h3>
                            <p className="text-(--text-white-dim) font-normal ts-18 lh-160 ls-1 max-w-[320px]">
                                Build tools with drag-and-drop simplicity.
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
