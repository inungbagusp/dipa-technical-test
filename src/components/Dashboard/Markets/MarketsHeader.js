import Image from "next/image";

const MarketsHeader = () => {
    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="ff-inter text-white text-[14px] font-medium lh-150 ls-neg1">Markets</h2>

            <div className="flex items-center gap-2">
                <button className={[
                    "flex items-center gap-1 bg-[#2A3036] border border-[#323941] px-2 py-px rounded-[6px] text-white text-[12px]",
                    "hover:bg-[linear-gradient(to_bottom,#576470CC,#57647000)]",
                    "cursor-pointer",
                ].join(" ")}
                >
                    <Image src="/image/dashboard/icon-filter.svg" width={14} height={14} alt="Filter"/>
                    Filter
                </button>

                <button className={[
                    "flex items-center gap-1 bg-[#2A3036] border border-[#323941] px-1 py-px rounded-[4px] text-white text-[12px]",
                    "hover:bg-[linear-gradient(to_bottom,#576470CC,#57647000)]",
                    "cursor-pointer",
                ].join(" ")}
                >
                    Sort by
                    <Image src="/image/dashboard/icon-chevron-down.svg" width={14} height={14} alt="Sort"/>
                </button>
            </div>
        </div>
    );
}

export default MarketsHeader;
