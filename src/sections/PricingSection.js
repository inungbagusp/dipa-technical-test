"use client";

import { useState } from "react";
import Container from "@/components/UI/Container";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/motion";
import Image from "next/image";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
        <Container className="py-[100px] border-l border-r border-border-gray text-center">
            {/* LABEL */}
            <motion.p
                variants={fadeUp}
                className="text-(--primary) uppercase ff-roobert ts-16 lh-160 ls-4 mb-2"
            >
                Pricing
            </motion.p>

            {/* HEADING */}
            <motion.h2
                variants={fadeUp}
                className="ts-56 font-medium text-(--text-gray-scale-900) lh-120 ls-neg2 mb-10"
            >
                Start for free <br />
                Get used to winning
            </motion.h2>

            {/* TOGGLE (Monthly/Annual) */}
            <motion.div
                variants={fadeUp}
                className="flex items-center justify-center gap-6 my-10"
            >
                <button
                    onClick={() => setIsAnnual(false)}
                    className="ts-18 font-normal lh-120 ls-0 text-(--text-black)"
                >
                    Monthly
                </button>

                {/* Switch */}
                <div
                    onClick={() => setIsAnnual(!isAnnual)}
                    className={`w-[50px] h-7 rounded-full cursor-pointer relative transition-all ${
                    isAnnual ? "bg-blue-200" : "bg-border-gray"
                    }`}
                >
                    <div
                    className={`w-5 h-5 bg-white rounded-full absolute top-[4px] transition-all ${
                        isAnnual ? "left-6" : "left-0.5"
                    }`}
                    ></div>
                </div>

                <div>
                    <button
                        onClick={() => setIsAnnual(true)}
                        className="ts-18 font-normal lh-120 ls-0 text-(--text-black) mr-2"
                    >
                        Annual
                    </button>

                    {/* Badge */}
                    {isAnnual && (
                        <span className="px-3 py-1 bg-blue-100 text-(--primary) rounded-full ts-12 lh-150 ls-0">
                            10% OFF
                        </span>
                    )}
                </div>
            </motion.div>

            {/* PRICING CARDS */}
            <motion.div
                variants={fadeUp}
                className="flex justify-center gap-6 self-end"
            >
                {/* LEFT CARD — BASIC */}
                <div className="w-[488px] max-h-[312px] px-8 pt-6 pb-8 bg-white rounded-3xl border border-border-gray text-left self-end">
                    <div className="flex justify-between pb-6 mb-6 border-b border-border-gray-soft">
                        <div className="flex flex-col justify-between gap-7 max-w-[180px]">
                            <h3 className="ts-24 leading-[36px] ls-0 font-medium text-(--text-gray-scale-deep)">Basic</h3>
                            <div className="flex items-end gap-1">
                                <span className="ts-40 font-medium leading-[52px] tracking-[0.05em] text-(--text-gray-scale-900)">$0</span>
                                <span className="ts-18 text-(--text-gray-muted)">/ month</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 max-w-[212px]">
                            <p className="font-normal ts-14 leading-[24px] ls-0 text-(--text-gray-muted)">
                                Kickstart your product research in your business at no cost.
                            </p>
                            <button className="px-6 py-3 rounded-full border hover:bg-gray-100 transition max-w-[146px] h-[48px]">
                                <span className="ts-16 font-medium lh-120 ls-0 text-(--text-gray-light)">Current Plan</span>
                            </button>
                        </div>
                    </div>
                    {/* Features */}
                    <ul className="space-y-[10px]">
                        <li className="flex items-center gap-2">
                            <Image src="/image/icon/icon-check-gray.svg" alt="check" width={20} height={20}/>
                            <span className="font-normal ts-16 leading-[24px] ls-0 text-(--text-gray-scale-900)">25 users</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Image src="/image/icon/icon-check-gray.svg" alt="check" width={20} height={20}/>
                            <span className="font-normal ts-16 leading-[24px] ls-0 text-(--text-gray-scale-900)">Email and live chat support</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Image src="/image/icon/icon-check-gray.svg" alt="check" width={20} height={20}/>
                            <span className="font-normal ts-16 leading-[24px] ls-0 text-(--text-gray-scale-900)">AI power-ups</span>
                        </li>
                    </ul>
                </div>

                {/* RIGHT CARD — ENTERPRISE */}
                <div className="w-[480px] p-1 rounded-3xl bg-linear-to-b from-[#124FF8] to-[#93D2FF] shadow-xl relative overflow-hidden">
                    {/* Badge */}
                    <div className="py-2 text-white text-center ts-12 font-medium">
                        BEST VALUE
                    </div>

                    <div className="bg-white p-10 rounded-3xl">
                        <div className="flex justify-between pb-6 mb-6 border-b border-border-gray-soft">
                            <div className="flex flex-col justify-between gap-7 max-w-[180px]">
                                <h3 className="ts-24 leading-[36px] ls-0 font-medium text-(--text-gray-scale-deep) text-left">Enterprise</h3>
                                <div className="flex items-end gap-1">
                                    <span className="ts-40 font-medium leading-[52px] tracking-[0.05em] text-(--text-gray-scale-900)">${isAnnual ? "10" : "12"}</span>
                                    <span className="ts-18 text-(--text-gray-muted)">/ month</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 max-w-[212px]">
                                <p className="text-left font-normal ts-14 leading-[24px] ls-0 text-(--text-gray-muted)">
                                    Fuel your product workflow with more advanced research.
                                </p>
                                <button className="px-4 py-3 rounded-full border hover:bg-gray-100 transition max-w-[148px] h-[48px] bg-linear-to-t from-[#124FF8] to-[#93D2FF]">
                                    <span className="ts-16 font-medium lh-120 ls-1 text-white">Upgrade Now</span>
                                </button>
                            </div>
                        </div>

                        <ul className="space-y-[10px]">
                            <li className="flex items-center gap-2">
                                <Image src="/image/icon/icon-check-blue.svg" alt="check" width={20} height={20}/>
                                <span className="font-normal ts-16 leading-[24px] ls-0 text-(--text-gray-scale-900)">Unlimited workspace</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src="/image/icon/icon-check-blue.svg" alt="check" width={20} height={20}/>
                                <span className="font-normal ts-16 leading-[24px] ls-0 text-(--text-gray-scale-900)">Advanced admin permissions & controls</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src="/image/icon/icon-check-blue.svg" alt="check" width={20} height={20}/>
                                <span className="font-normal ts-16 leading-[24px] ls-0 text-(--text-gray-scale-900)">Annual task limits</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </Container>
    </motion.section>
  );
}
