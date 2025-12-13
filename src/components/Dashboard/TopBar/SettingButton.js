import Image from "next/image";

const SettingButton = () => {
    return (
        <div className="flex items-center gap-2">
            <button className="p-[6px] rounded-[6px] bg-[#2A3036] lg:min-w-[97px] h-[32px] transition">
                <div className="flex items-center gap-1">
                    <Image
                        src="/image/dashboard/icon-settings.svg"
                        width={20}
                        height={20}
                        alt="Settings"
                    />
                    <span className="hidden lg:block ff-inter font-normal text-[14px] lh-150 ls-0 text-white">Settings</span>
                </div>
            </button>
            <Image
                src="/image/dashboard/icon-notification.svg"
                width={20}
                height={20}
                alt="Notifications"
            />
        </div>
    );
}

export default SettingButton;
