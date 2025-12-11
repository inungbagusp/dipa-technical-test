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
        <Container className={[
                "relative",
                "py-[24px]",
                "px-[24px]",
                "text-center",
                "border-r",
                "border-l",
                "border-border-gray",
                "md:py-[40px]",
                "md:px-[40px]",
                "xl:py-[100px]",
            ].join(" ")}
        >
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
                Pricing
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
                    "lg:text-[56px]",
                ].join(" ")}
            >
                Start for free <br />
                Get used to winning
            </motion.h2>

            {/* TOGGLE (Monthly/Annual) */}
            <motion.div
                variants={fadeUp}
                className={[
                    "flex",
                    "items-center",
                    "justify-center",
                    "gap-2",
                    "my-4",
                    "lg:my-10",
                    "lg:gap-6",
                ].join(" ")}
            >
                <button
                    onClick={() => setIsAnnual(false)}
                    className={[
                        "text-[14px]",
                        "font-normal",
                        "lh-120",
                        "ls-0",
                        "text-(--text-black)",
                        "lg:text-[18px]"
                    ].join(" ")}
                >
                    Monthly
                </button>

                {/* Switch */}
                <div
                    onClick={() => setIsAnnual(!isAnnual)}
                    className={[
                        "w-[40px]",
                        "h-5",
                        "rounded-full",
                        "cursor-pointer",
                        "relative",
                        "transition-all",
                        isAnnual ? "bg-blue-200" : "bg-border-gray",
                        "lg:w-[50px]",
                        "lg:h-7",
                    ].join(" ")}
                >
                    <div
                        className={[
                            "w-3",
                            "h-3",
                            "bg-white",
                            "rounded-full",
                            "absolute",
                            "top-[4px]",
                            "transition-all",
                            isAnnual ? "left-6" : "left-0.5",
                            "lg:w-5",
                            "lg:h-5",
                        ].join(" ")}
                    />
                </div>

                <div>
                    <button
                        onClick={() => setIsAnnual(true)}
                        className={[
                            "text-[14px]",
                            "font-normal",
                            "lh-120",
                            "ls-0",
                            "mr-2",
                            "text-(--text-black)",
                            "lg:text-[18px]",
                        ].join(" ")}
                    >
                        Annual
                    </button>

                    {/* Badge */}
                    {isAnnual && (
                        <span className={[
                            "px-3",
                            "py-1",
                            "bg-blue-100",
                            "text-(--primary)",
                            "rounded-full",
                            "ts-12",
                            "lh-150",
                            "ls-0",
                        ].join(" ")}
                        >
                            10% OFF
                        </span>
                    )}
                </div>
            </motion.div>

            {/* PRICING CARDS */}
            <motion.div
                variants={fadeUp}
                className="flex flex-col lg:flex-row justify-center gap-6 self-end"
            >
                {/* LEFT CARD — BASIC */}
                <div className={[
                    "w-full",
                    "max-h-[312px]",
                    "px-4",
                    "pt-6",
                    "pb-8",
                    "bg-white",
                    "rounded-3xl",
                    "border",
                    "border-border-gray",
                    "text-left",
                    "self-end",
                    "lg:w-[488px]",
                    "md:px-8",
                    "md:pt-6",
                    "md:pb-8",
                ].join(" ")}
                >
                    <div className="flex justify-between pb-6 mb-6 border-b border-border-gray-soft">
                        <div className="flex flex-col justify-between gap-7 max-w-[180px]">
                            <h3 className={[
                                    "text-[18px]",
                                    "leading-[36px]",
                                    "ls-0",
                                    "font-medium",
                                    "text-(--text-gray-scale-deep)",
                                    "md:text-[24px]"
                                ].join(" ")}
                            >
                                Basic
                            </h3>
                            <div className="flex items-baseline gap-1">
                                <span className={[
                                        "text-[28px]",
                                        "font-medium",
                                        "leading-[52px]",
                                        "tracking-[0.05em]",
                                        "text-(--text-gray-scale-900)",
                                        "md:text-[40px]"
                                    ].join(" ")}
                                >
                                    $0
                                </span>
                                <span className={[
                                        "text-[12px]",
                                        "text-(--text-gray-muted)",
                                        "md:text-[18px]"
                                    ].join(" ")}
                                >
                                    / month
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 max-w-[160px] md:max-w-[212px]">
                            <p className={[
                                    "font-normal",
                                    "text-[12px]",
                                    "leading-[16px]",
                                    "ls-0",
                                    "text-(--text-gray-muted)",
                                    "md:text-[14px]",
                                    "md:leading-[24px]"
                                ].join(" ")}
                            >
                                Kickstart your product research in your business at no cost.
                            </p>
                            <button className={[
                                "cursor-pointer",
                                "rounded-full",
                                "border",
                                "hover:bg-gray-100",
                                "transition",
                                "max-w-[120px]",
                                "h-[40px]",
                                "flex",
                                "items-center",
                                "justify-center",
                                "px-4",
                                "py-2",
                                "md:max-w-[146px]",
                                "md:h-[48px]",
                                "md:px-6",
                                "md:py-3",
                            ].join(" ")}
                            >
                                <span className={[
                                    "text-[12px]",
                                    "font-medium",
                                    "lh-120",
                                    "ls-0",
                                    "text-(--text-gray-light)",
                                    "md:text-[16px]",
                                ].join(" ")}
                                >Current Plan</span>
                            </button>
                        </div>
                    </div>
                    {/* Features */}
                    <ul className="space-y-[4px] md:space-y-[10px]">
                        <li className="flex items-center gap-2">
                            <Image src="/image/icon/icon-check-gray.svg" alt="check" width={20} height={20}/>
                            <span className={[
                                "font-normal",
                                "text-[12px]",
                                "leading-[24px]",
                                "ls-0",
                                "text-(--text-gray-scale-900)",
                                "md:text-[16px]",
                            ].join(" ")}
                            >25 users</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Image src="/image/icon/icon-check-gray.svg" alt="check" width={20} height={20}/>
                            <span className={[
                                "font-normal",
                                "text-[12px]",
                                "leading-[24px]",
                                "ls-0",
                                "text-(--text-gray-scale-900)",
                                "md:text-[16px]",
                            ].join(" ")}
                            >Email and live chat support</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Image src="/image/icon/icon-check-gray.svg" alt="check" width={20} height={20}/>
                            <span className={[
                                "font-normal",
                                "text-[12px]",
                                "leading-[24px]",
                                "ls-0",
                                "text-(--text-gray-scale-900)",
                                "md:text-[16px]",
                            ].join(" ")}
                            >AI power-ups</span>
                        </li>
                    </ul>
                </div>

                {/* RIGHT CARD — ENTERPRISE */}
                <div className={[
                    "w-full",
                    "p-1",
                    "rounded-3xl",
                    "bg-linear-to-b from-[#124FF8] to-[#93D2FF]",
                    "shadow-xl",
                    "relative",
                    "overflow-hidden",
                    "lg:w-[480px]",
                ].join(" ")}
                >
                    {/* Badge */}
                    <div className="py-2 text-white text-center ts-12 font-medium">
                        BEST VALUE
                    </div>

                    <div className="bg-white p-4 lg:p-10 rounded-3xl">
                        <div className="flex justify-between pb-6 mb-6 border-b border-border-gray-soft">
                            <div className="flex flex-col justify-between gap-7 max-w-[180px]">
                                <h3 className={[
                                        "text-left",
                                        "text-[18px]",
                                        "leading-[36px]",
                                        "ls-0",
                                        "font-medium",
                                        "text-(--text-gray-scale-deep)",
                                        "md:text-[24px]"
                                    ].join(" ")}
                                >
                                    Enterprise
                                </h3>
                                <div className="flex items-baseline gap-1">
                                    <span className={[
                                            "text-[28px]",
                                            "font-medium",
                                            "leading-[52px]",
                                            "tracking-[0.05em]",
                                            "text-(--text-gray-scale-900)",
                                            "md:text-[40px]"
                                        ].join(" ")}
                                    >
                                        ${isAnnual ? "10" : "12"}
                                    </span>
                                    <span className={[
                                            "text-[12px]",
                                            "text-(--text-gray-muted)",
                                            "md:text-[18px]"
                                        ].join(" ")}
                                    >
                                        / month
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 max-w-[160px] md:max-w-[212px]">
                                <p className={[
                                        "text-left",
                                        "font-normal",
                                        "text-[12px]",
                                        "leading-[16px]",
                                        "ls-0",
                                        "text-(--text-gray-muted)",
                                        "md:text-[14px]",
                                        "md:leading-[24px]"
                                    ].join(" ")}
                                >
                                    Fuel your product workflow with more advanced research.
                                </p>
                                <button className={[
                                        "py-3",
                                        "h-[40px]",
                                        "max-w-[120px]",
                                        "rounded-full",
                                        "border",
                                        "flex",
                                        "items-center",
                                        "justify-center",
                                        "hover:bg-gray-100",
                                        "transition",
                                        "md:max-w-[148px]",
                                        "md:h-[48px]",
                                        "bg-linear-to-t from-[#124FF8] to-[#93D2FF]"
                                    ].join(" ")}
                                >
                                    <span className={[
                                            "text-[14px]",
                                            "font-medium",
                                            "lh-120",
                                            "ls-1",
                                            "text-white",
                                            "md:text-[16px]",
                                        ].join(" ")}
                                    >
                                        Upgrade Now
                                    </span>
                                </button>
                            </div>
                        </div>

                        <ul className="space-y-[4px] md:space-y-[10px]">
                            <li className="flex items-center gap-2">
                                <Image src="/image/icon/icon-check-blue.svg" alt="check" width={20} height={20}/>
                                <span className={[
                                    "font-normal",
                                    "text-[12px]",
                                    "leading-[24px]",
                                    "ls-0",
                                    "text-(--text-gray-scale-900)",
                                    "md:text-[16px]",
                                ].join(" ")}
                                >Unlimited workspace</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src="/image/icon/icon-check-blue.svg" alt="check" width={20} height={20}/>
                                <span className={[
                                    "font-normal",
                                    "text-[12px]",
                                    "leading-[24px]",
                                    "ls-0",
                                    "text-(--text-gray-scale-900)",
                                    "md:text-[16px]",
                                ].join(" ")}
                                >Advanced admin permissions & controls</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src="/image/icon/icon-check-blue.svg" alt="check" width={20} height={20}/>
                                <span className={[
                                    "font-normal",
                                    "text-[12px]",
                                    "leading-[24px]",
                                    "ls-0",
                                    "text-(--text-gray-scale-900)",
                                    "md:text-[16px]",
                                ].join(" ")}
                                >Annual task limits</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </Container>
    </motion.section>
  );
}
