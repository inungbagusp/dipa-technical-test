import Image from "next/image";

const StakingSummaryCard = ({ item }) => {
    return (
        <div
            className={[
                "w-full h-[140px] xl:w-[216px]",
                "bg-[#1A1D21]",
                "rounded-xl",
                "border border-[#2A3036]",
                "py-3 px-4",
                "flex flex-col justify-between gap-2"
            ].join(" ")}
        >
            {/* HEADER */}
            <div className="flex flex-col justify-between h-full">
                <div className="flex items-center gap-[6px]">
                    <Image src={item.icon} width={36} height={36} alt={item.name} />
                    <p className="ff-inter text-white font-medium text-[14px] lh-150 ls-neg1">{item.symbol}</p>
                </div>

                <div className="flex flex-col">
                    <p className="ff-inter text-white font-medium text-[14px] lh-150 ls-neg1">{item.apr}</p>
                    <p className="ff-inter text-[#97A3B6] text-[12px] font-normal lh-150 ls-0">{item.amount}</p>
                </div>

                <p className="ff-inter text-[#97A3B6] text-[10px] font-medium lh-150 ls-3">{`EST. MONTHLY EARNS: ${item.earnings}`}</p>
            </div>
        </div>
    );
}

export default StakingSummaryCard;
