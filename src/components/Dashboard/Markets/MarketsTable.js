import { marketsData } from "@/data/marketsdata";
import MarketsRow from "@/components/Dashboard/Markets/MarketsRow";
import Image from "next/image";

const MarketsTable = () => {
    return (
        <div className="w-full overflow-x-auto">
            <div className="w-[722px] md:w-full">
                
                {/* HEADER */}
                <div className="grid grid-cols-5 px-3 rounded-[2px] py-1 border-b border-[#1C2127] bg-[#21262B] mb-1">
                    <span className="ff-intertight font-medium text-[12px] text-[#677489]">Name</span>
                    
                    <div className="flex items-center gap-1">
                        <span className="ff-intertight font-medium text-[12px] text-[#677489]">Price (USD)</span>
                        <Image src="/image/dashboard/chevron-selector-vertical.svg" width={12} height={12} alt="chevron" />
                    </div>

                    <div className="flex items-center gap-1">
                        <span className="ff-intertight font-medium text-[12px] text-[#677489]">Market Cap (USD)</span>
                        <Image src="/image/dashboard/chevron-selector-vertical.svg" width={12} height={12} alt="chevron" />
                    </div>

                    <div className="flex items-center gap-1">
                        <span className="ff-intertight font-medium text-[12px] text-[#677489]">Circulating Supply</span>
                        <Image src="/image/dashboard/chevron-selector-vertical.svg" width={12} height={12} alt="chevron" />
                    </div>

                    <div className="flex items-center gap-1 ml-auto">
                        <span className="ff-intertight font-medium text-[12px] text-[#677489]">Change 24h</span>
                        <Image src="/image/dashboard/chevron-selector-vertical.svg" width={12} height={12} alt="chevron" />
                    </div>
                </div>

                {/* ROWS */}
                {marketsData.map((item, index) => (
                    <MarketsRow key={index} item={item} />
                ))}

            </div>
        </div>
  );
}

export default MarketsTable;
