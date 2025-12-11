import Image from "next/image";

const ToolkitSidebar = (props) => {
    const { active, setActive, items } = props;
    return (
        <div className="w-full md:w-[600px] lg:w-[500px] xl:w-[500px]">
            <p className={[
                    "text-[14px]",
                    "text-center",
                    "font-medium",
                    "ff-roobert",
                    "lh-160",
                    "ls-4",
                    "text-(--primary)",
                    "mb-2",
                    "lg:text-[16px]",
                    "lg:text-left",
                ].join(" ")}
            >
                TOOLKIT
            </p>
            <h2 className={[
                    "text-[28px]",
                    "text-center",
                    "font-medium",
                    "ff-roobert",
                    "lh-130",
                    "ls-neg2",
                    "mb-8",
                    "text-(--text-black)",
                    "lg:text-[48px]",
                    "lg:text-left",
                    "lg:mb-0"
                ].join(" ")}
            >
                Complete toolkit for AI automation
            </h2>
            <div className="flex flex-col mt-2">
                {items.map((item) => {
                    const isActive = active === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={[
                                "cursor-pointer",
                                "text-left",
                                "group",
                                "py-2",
                                "border-b",
                                "border-border-gray",
                                isActive ? "border-b border-(--primary)" : "border-b border-border-gray",
                                "lg:py-8"
                            ].join(" ")}
                        >
                            <div className="flex items-center gap-3">
                                <Image 
                                    src={item.icon}
                                    width={28}
                                    height={28}
                                    alt={item.title}
                                    className={[
                                        isActive ? "opacity-100" : "opacity-50 group-hover:opacity-100",
                                        "w-[20px] h-[20px] lg:w-[28px] lg:h-[28px]"
                                    ].join(" ")}
                                />
                                <span className={[
                                        "ff-roobert",
                                        "text-[14px]",
                                        "lh-120",
                                        "ls-neg2",
                                        "font-medium",
                                        "text-(--text-black)",
                                        "lg:text-[24px]",
                                    ].join(" ")}
                                >
                                    {item.title}
                                </span>
                            </div>

                            {isActive && (
                                <p className={[
                                        "ff-roobert",
                                        "font-normal",
                                        "text-[12px]",
                                        "lh-60",
                                        "ls-1",
                                        "text-(--text-gray-muted)",
                                        "pl-10",
                                        "mt-3",
                                        "lg:text-[18px]",
                                    ].join(" ")}
                                >
                                    {item.description}
                                </p>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default ToolkitSidebar;
