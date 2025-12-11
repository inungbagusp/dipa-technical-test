"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { marquee } from "@/utils/motion";

const brands = [
  { src: "/image/logo/ebay.png", alt: "eBay" },
  { src: "/image/logo/expedia.png", alt: "Expedia" },
  { src: "/image/logo/docusign.png", alt: "DocuSign" },
  { src: "/image/logo/phantom.png", alt: "Phantom" },
];

const BrandSlider = () => {
    return (
        <section>
            <div className="max-w-[1320px] mx-auto">
                <div className="flex items-center">
                    {/* LEFT TEXT */}
                    <div className="max-w-[320px] py-[60px] px-[48px] h-[180px] border border-border-gray">
                        <p className="ff-roobert font-normal ts-20 lh-150 ls-0 text-(--text-gray-deep)">
                        {`Trusted by 100+ world's best brand`}
                        </p>
                    </div>

                    {/* RIGHT SLIDER */}
                    <div className="flex-1 overflow-hidden">
                        <div className="flex whitespace-nowrap marquee">
                            <div className="flex items-center justify-center border-t border-b border-border-gray track">
                                <div className="w-[250px] h-[180px] flex justify-center border-r border-border-gray">
                                    <Image
                                        src={brands[0].src}
                                        alt={brands[0].alt}
                                        width={90}
                                        height={36}
                                        className="object-contain opacity-70 hover:opacity-100 transition-all text-center"
                                    />
                                </div>
                                <div className="w-[250px] h-[180px] flex justify-center border-r border-border-gray">
                                    <Image
                                        src={brands[1].src}
                                        alt={brands[1].alt}
                                        width={146}
                                        height={32}
                                        className="object-contain opacity-70 hover:opacity-100 transition-all text-center"
                                    />
                                </div>
                                <div className="w-[250px] h-[180px] flex justify-center border-r border-border-gray">
                                    <Image
                                        src={brands[2].src}
                                        alt={brands[2].alt}
                                        width={130}
                                        height={30}
                                        className="object-contain opacity-70 hover:opacity-100 transition-all text-center"
                                    />
                                </div>
                                <div className="w-[250px] h-[180px] flex justify-center border-r border-border-gray">
                                    <Image
                                        src={brands[3].src}
                                        alt={brands[3].alt}
                                        width={129}
                                        height={30}
                                        className="object-contain opacity-70 hover:opacity-100 transition-all text-center"
                                    />
                                </div>
                                <div className="w-[250px] h-[180px] flex justify-center border-r border-border-gray">
                                    <Image
                                        src={brands[0].src}
                                        alt={brands[0].alt}
                                        width={90}
                                        height={36}
                                        className="object-contain opacity-70 hover:opacity-100 transition-all text-center"
                                    />
                                </div>
                                <div className="w-[250px] h-[180px] flex justify-center border-r border-border-gray">
                                    <Image
                                        src={brands[1].src}
                                        alt={brands[1].alt}
                                        width={146}
                                        height={32}
                                        className="object-contain opacity-70 hover:opacity-100 transition-all text-center"
                                    />
                                </div>
                                <div className="w-[250px] h-[180px] flex justify-center border-r border-border-gray">
                                    <Image
                                        src={brands[2].src}
                                        alt={brands[2].alt}
                                        width={130}
                                        height={30}
                                        className="object-contain opacity-70 hover:opacity-100 transition-all text-center"
                                    />
                                </div>
                                <div className="w-[250px] h-[180px] flex justify-center border-r border-border-gray">
                                    <Image
                                        src={brands[3].src}
                                        alt={brands[3].alt}
                                        width={129}
                                        height={30}
                                        className="object-contain opacity-70 hover:opacity-100 transition-all text-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BrandSlider;
