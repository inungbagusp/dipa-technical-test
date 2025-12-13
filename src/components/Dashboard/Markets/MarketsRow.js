import Image from "next/image";

const MarketsRow = (props) => {
    const { item } = props;
    return (
        <div className={[
            "grid",
            "grid-cols-5",
            "px-1 py-[6px] border-b border-[#1C2127] hover:bg-[#1A1D21] transition-colors",
        ].join(" ")}>

            <div className="flex items-center gap-3">
                <Image src={item.icon} width={36} height={36} alt={item.name} />
                <div>
                    <p className="ff-inter text-white font-medium text-[14px] lh-150 ls-neg1">{item.symbol}</p>
                    <p className="ff-inter font-normal text-[12px] text-[#97A3B6] lh-150 ls-0">{item.name}</p>
                </div>
            </div>

            <p className="flex items-center text-white ff-inter text-[14px] font-normal lh-150 ls-0">${item.price.toLocaleString()}</p>
            <p className="flex items-center text-white ff-inter text-[14px] font-normal lh-150 ls-0">${item.marketCap.toLocaleString()}</p>
            <p className="flex items-center text-white ff-inter text-[14px] font-normal lh-150 ls-0">{item.supply.toLocaleString()} {item.symbol}</p>
            <p
                className={[
                    "flex items-center justify-end",
                    item.change > 0
                        ? "text-[#4FCBA8]"
                            : item.change === 0 ? "text-white"
                                : "text-[#FF5F5F]",
                    "ff-inter text-[14px] font-normal lh-150 ls-0"
                ].join(" ")}
            >
                {item.change > 0 ? "+" : ""}{item.change === 0 ? "0.00" : item.change}%
            </p>
        </div>
    );
}

export default MarketsRow;
