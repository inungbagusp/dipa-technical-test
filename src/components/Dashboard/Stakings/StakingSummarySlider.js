"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import StakingSummaryCard from "./StakingSummaryCard";
import { stakingSummary } from "@/data/stakings";

const StakingSummarySlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (!swiperRef.current) return;

        swiperRef.current.params.navigation.prevEl = prevRef.current;
        swiperRef.current.params.navigation.nextEl = nextRef.current;

        swiperRef.current.navigation.destroy();
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
    }, []);

    return (
        <div className="relative min-w-0 pb-5 mb-5 border-b border-[#2A3036]">
            <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={12}
                slidesPerView="auto"
                loop={true}
                loopAddBlankSlides={false}
                watchSlidesProgress={true}
            >
                {stakingSummary.map((item, i) => (
                    <SwiperSlide key={i}>
                        <StakingSummaryCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* LEFT ARROW */}
            <button
                ref={prevRef}
                className={["absolute left-[-16px] top-1/2 -translate-y-1/2",
                    "w-8 h-8 bg-[#1A1D21] border border-[#2A3036]",
                    "rounded-full flex items-center justify-center",
                    "hover:bg-[#2A3036] transition z-10"].join(" ")}
            >
                <Image
                    src="/image/dashboard/icon-chevron-right.svg"
                    width={14}
                    height={14}
                    alt="Prev"
                    className="transform -scale-x-100 cursor-pointer"
                />
            </button>

            {/* RIGHT ARROW */}
            <button
                ref={nextRef}
                className={["absolute right-[-16px] top-1/2 -translate-y-1/2",
                    "w-8 h-8 bg-[#1A1D21] border border-[#2A3036]",
                    "rounded-full flex items-center justify-center",
                    "hover:bg-[#2A3036] transition z-10"].join(" ")}
            >
                <Image
                    src="/image/dashboard/icon-chevron-right.svg"
                    width={14}
                    height={14}
                    alt="Next"
                    className="cursor-pointer"
                />
            </button>
        </div>
    );
}

export default StakingSummarySlider;
