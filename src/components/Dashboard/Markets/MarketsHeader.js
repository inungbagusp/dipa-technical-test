import Image from "next/image";

const MarketsHeader = () => {
    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="ff-inter text-white text-[14px] font-medium lh-150 ls-neg1">Markets</h2>

            <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 bg-[#323941] border border-[#454F58] px-2 py-px rounded-[4px] text-white text-[12px]">
                    <Image src="/image/dashboard/icon-filter.svg" width={14} height={14} alt="Filter"/>
                    Filter
                </button>

                <button className="flex items-center gap-1 bg-[#323941] border border-[#454F58] px-1 py-px rounded-[4px] text-white text-[12px]">
                    Sort by
                    <Image src="/image/dashboard/icon-chevron-down.svg" width={14} height={14} alt="Sort"/>
                </button>
            </div>
        </div>
    );
}

export default MarketsHeader;
