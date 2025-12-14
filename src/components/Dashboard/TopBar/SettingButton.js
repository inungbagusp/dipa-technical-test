import Image from "next/image";

const SettingButton = () => {
    return (
        <div className="flex items-center gap-2">
            <button className={[
                "px-[6px]",
                "rounded-[6px]",
                "bg-[#21262B]",
                "lg:min-w-[97px]",
                "h-[32px]",
                "transition",
                "border",
                "border-[#2A3036]",
                "hover:bg-[linear-gradient(to_bottom,rgba(42,48,54,0.80)_0%,rgba(42,48,54,1)_100%)]",
                "cursor-pointer"
            ].join(" ")}
            >
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
                src="/image/dashboard/icon-notification-v2.svg"
                width={40}
                height={40}
                alt="Notifications"
            />
        </div>
    );
}

export default SettingButton;
