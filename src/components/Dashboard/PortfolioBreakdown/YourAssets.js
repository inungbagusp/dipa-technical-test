"use client";
import { yourAssets } from "@/data/dashboard";
import Image from "next/image";

const YourAssets = () => {
    return (
        <div className={[
            "py-5 px-4 w-full xl:min-w-[353px]",
            "bg-[#111418] border border-[#1C2127] rounded-xl"
        ].join(" ")}
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="ff-inter text-[14px] font-medium lh-150 ls-neg1 text-white">Your Assets</h3>
                <p className=" cursor-pointer ff-inter text-[12px] font-medium lh-150 ls-s text-[#CDD5E0] hover:text-white">See all</p>
            </div>
            <div className="bg-[#21262B] flex items-center justify-between py-[5px] px-3 rounded-[2px]">
                <p className="ff-inter text-[12px] font-medium lh-150 ls-0 text-(--text-gray-muted)">Amount</p>
                <p className="ff-inter text-[12px] font-medium lh-150 ls-0 text-(--text-gray-muted)">Value & Change</p>
            </div>
            <div>
                {yourAssets.map((asset, index) => (
                    <div key={index} className={[
                        "flex justify-between items-center py-[10px] mb-[10px] border-b border-[#21262B]",
                        index === yourAssets.length - 1 ? "border-b-0 mb-0!" : "",
                        "hover:bg-[linear-gradient(to_bottom,#2A3036CC,#2A303600)] transition-colors hover:rounded-[6px]",
                        "cursor-pointer"
                    ].join(" ")}>
                        <div className="flex items-center gap-2">
                            <Image
                                src={asset.icon}
                                width={36}
                                height={36}
                                alt={asset.name}
                            />
                            <div className="flex flex-col">
                                <h4 className="ff-inter text-[14px] font-medium lh-150 ls-neg1 text-white">{asset.value}</h4>
                                <p className="ff-inter text-[12px] font-normal lh-150 ls-0 text-(--text-gray-light)">{asset.name}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="ff-inter text-[14px] font-medium lh-150 ls-neg1 text-white">{asset.price}</p>
                            <div className="flex items-center justify-center gap-1">
                                <span className={[
                                    "ff-intertight",
                                    "text-[12px]",
                                    "font-normal",
                                    "lh-150",
                                    "ls-0",
                                    asset.status === "up" ? "text-[#4FCBA8]" : "text-[#F14E6D]"
                                ].join(" ")}>{asset.change}</span>
                                <Image
                                    src={
                                    asset?.status === "up"
                                        ? "/image/dashboard/icon-arrow-up-right.svg"
                                        : "/image/dashboard/icon-arrow-down-right.svg"
                                    }
                                    alt={asset.status}
                                    width={14}
                                    height={14}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default YourAssets;
