"use client";

import CurrencySelect from "./CurrencySelect";
import SwapButton from "./SwapButton";

const QuickAccessForm = () => {
    return (
        <div>
            <div className="flex flex-col gap-3 border border-[#1C2127] p-3 rounded-lg">
                {/* YOU SEND */}
                <div>
                    <p className="text-[#7A828A] text-[13px] mb-1">You send</p>

                    <div className="flex items-center bg-[#2A3036] border border-[#1C2127] rounded-lg px-3 h-[48px]">
                        <input
                            type="number"
                            placeholder="0.00"
                            className="bg-transparent text-white text-[16px] grow outline-none"
                        />
                        <CurrencySelect defaultIcon="icon-usdt-color" defaultSymbol="USDT" />
                    </div>
                </div>

                {/* Swap Button */}
                <div className="w-full flex justify-center relative">
                    <div className="absolute h-[2px] top-[50%] left-0 transform translate-y-1/2 w-full bg-[#1A1D21] rounded-full z-0"/>
                    <SwapButton/>
                </div>

                {/* YOU RECEIVE */}
                <div>
                    <p className="text-[#7A828A] text-[13px] mb-1">You'll receive</p>

                    <div className="flex items-center bg-[#2A3036] border border-[#1C2127] rounded-lg px-3 h-[48px]">
                        <input
                            type="number"
                            placeholder="0.00"
                            className="bg-transparent text-white text-[16px] grow outline-none"
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
                    "w-full h-[48px] rounded-lg text-black text-[15px] font-medium mt-6",
                    "bg-[linear-gradient(to_right,#8ADDC6,#4FCBA8)]",
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
