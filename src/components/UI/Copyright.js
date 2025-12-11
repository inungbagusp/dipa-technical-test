"use client";

import Image from "next/image";
import Link from "next/link";

const CopyRight = () => {
    return (
        <div className="border-t border-border-white-soft py-7 flex items-center justify-between">
          
            <p className="text-(--text-gray-light) ts-14 font-normal lh-120 ls-0">
                ©2025 Monievo Technology, Inc.
            </p>

            <Image
                src="/image/logo/logo.svg"
                width={156}
                height={24}
                alt="Monievo Logo"
            />

            <div className="flex items-center gap-10">
                <Link
                    href="/privacy"
                    className="text-(--text-gray-muted) hover:text-(--text-gray-scale-900) ts-14 lh-150 ls-0 font-normal"
                    target="_blank"
                >
                    Privacy Policy
                </Link>
                <Link
                    href="/terms"
                    className="text-(--text-gray-muted) hover:text-(--text-gray-scale-900) ts-14 lh-150 ls-0 font-normal"
                    target="_blank"
                >
                    Terms of Use
                </Link>
                <Link
                    href="/disclosure"
                    className="text-(--text-gray-muted) hover:text-(--text-gray-scale-900) ts-14 lh-150 ls-0 font-normal"
                    target="_blank"
                >
                    Disclosure
                </Link>
            </div>
        </div>
    );
};

export default CopyRight;