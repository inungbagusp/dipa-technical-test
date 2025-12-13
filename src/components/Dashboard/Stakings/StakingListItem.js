"use client";

import Image from "next/image";

const StakingListItem = ({ item }) => {
    return (
        <div className={[
            "flex justify-between items-center px-2 py-2 bg-[#21262B] border border-[#1C2127] rounded-xl hover:bg-[#1A1D21] transition-colors mb-2",
            "sm:py-3 sm:px-4",
            "cursor-pointer"
        ].join(" ")}
        >
            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-3 w-[148px]">
                    <Image src={item.icon} width={36} height={36} alt={item.name} />
                    <div>
                        <p className="ff-inter text-white text-[12px] sm:text-[14px] font-medium lh-150 ls-neg1">{item.amount}</p>
                        <p className="ff-inter text-[#97A3B6] text-[12px] sm:text-[14px] font-normal lh-150 ls-0">{item.name}</p>
                    </div>
                </div>
                <div>
                    <p className="ff-inter text-white text-[12px] sm:text-[14px] font-medium lh-150 ls-neg1">{item.status}</p>
                    <p className="ff-inter text-[#97A3B6] text-[12px] sm:text-[14px] font-normal lh-150 ls-0">{item.date}</p>
                </div>
            </div>

            <div className="text-right">
                <p className="ff-inter text-white text-[12px] sm:text-[14px] font-medium lh-150 ls-neg1">{item.value}</p>
                <p className="ff-inter text-[#97A3B6] text-[12px] sm:text-[14px] font-normal lh-150 ls-0">APR: {item.apr}</p>
            </div>
        </div>
    );
}

export default StakingListItem;
