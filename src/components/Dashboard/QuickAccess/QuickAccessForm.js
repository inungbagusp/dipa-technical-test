"use client";

import CurrencySelect from "./CurrencySelect";
import SwapButton from "./SwapButton";

const QuickAccessForm = () => {
    return (
        <div>
            <div className="flex flex-col gap-3 bg-[#21262B] border border-[#2A3036] p-3 rounded-lg">
                <div>
                    <p className="text-[#7A828A] text-[13px] mb-1">You send</p>

                    <div className="flex items-center bg-[#2A3036] border border-[#1C2127] rounded-lg px-3 h-[48px]">
                        <input
                            type="number"
                            placeholder="0.00"
                            className="bg-transparent text-white text-[18px] grow outline-none"
                        />
                        <CurrencySelect defaultIcon="icon-usdt-color" defaultSymbol="USDT" />
                    </div>
                </div>

                <div className="w-full flex justify-center relative">
                    <div className="absolute h-[2px] top-[50%] left-0 transform translate-y-1/2 w-full bg-[#2A3036] rounded-full z-0"/>
                    <SwapButton/>
                </div>

                {/* YOU RECEIVE */}
                <div>
                    <p className="text-[#7A828A] text-[13px] mb-1">You'll receive</p>

                    <div className="flex items-center bg-[#2A3036] border border-[#1C2127] rounded-lg px-3 h-[48px]">
                        <input
                            type="number"
                            placeholder="0.00"
                            className="bg-transparent text-white text-[18px] grow outline-none"
                        />
                        <CurrencySelect defaultIcon="icon-eth-color" defaultSymbol="ETH" />
                    </div>
                </div>

                {/* Exchange Rate */}
                <p className="text-[#7A828A] text-[12px]">
                    1 ETH = 1,850 USDT
                </p>
            </div>
            {/* Preview Button */}
            <button
                className={[
                    "w-full h-[48px] text-black text-[15px] font-medium mt-6",
                    "rounded-[8px]",
                    "bg-[radial-gradient(54.77%_74.16%_at_45.23%_0%,#8ADDC6_0%,#4FCBA8_100%)]",
                    "shadow-[inset_0_0_0_1px_rgba(50,57,65,0.18),0_1px_2px_rgba(17,23,30,0.68),inset_0_-2px_2px_rgba(10,13,18,0.06)]",
                    "hover:bg-[linear-gradient(to_left,#8ADDC6,#4FCBA8)]",
                    "transition-all duration-300",
                    "cursor-pointer"
                ].join(" ")}
            >
                Preview
            </button>
        </div>
    );
}

export default QuickAccessForm;
