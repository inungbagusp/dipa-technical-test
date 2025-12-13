"use client";

import MarketsHeader from "./MarketsHeader";
import MarketsTable from "./MarketsTable";

const MarketsCard = () => {
    return (
		<div className="w-full xl:w-[722px] bg-[#111418] border border-[#1C2127] rounded-xl py-5 px-4 overflow-hidden">
			<MarketsHeader />
			<MarketsTable />
		</div>
    );
}

export default MarketsCard;
