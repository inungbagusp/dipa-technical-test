"use client";

import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/Auth/LoginForm";
import CustomLayout from "@/components/Layout/CustomLayout";

const LoginPage = () => {
    return (
        <CustomLayout>
            <div className="px-[24px] py-[40px]">
                <div className="flex items-center gap-2 mb-[40px]">
                    <Link href="/">
                        <Image src="/image/icon/home-icon.svg" width={20} height={20} alt="Home" />
                    </Link>
                    <span className="text-[16px] font-medium text-(--text-gray-scale-900)">/</span>
                    <span className="text-[16px] font-medium text-(--text-gray-scale-900)">Login</span>
                </div>
                <div className="min-h-screen flex flex-col items-center">
                    <div className="w-full max-w-sm shadow-md border border-gray-200 rounded-lg p-6 bg-white">
                        <h2 className="text-[18px] font-medium mb-4 text-center text-(--text-gray-scale-900)">Login</h2>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </CustomLayout>
    );
}

export default LoginPage;
