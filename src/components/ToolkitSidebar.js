import Image from "next/image";

const ToolkitSidebar = (props) => {
    const { active, setActive, items } = props;
    return (
        <div className="w-[500px]">
            <p className="ts-16 font-medium ff-roobert lh-160 ls-4 text-(--primary) mb-2">
                TOOLKIT
            </p>
            <h2 className="ts-48 font-medium ff-roobert lh-130 ls-neg2 text-(--text-black)">Complete toolkit for AI automation</h2>
            <div className="flex flex-col mt-2">
                {items.map((item) => {
                    const isActive = active === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={`text-left group py-8 ${isActive ? "border-b border-(--primary)" : "border-b border-border-gray"}`}
                        >
                            <div className="flex items-center gap-3">
                                <Image 
                                    src={item.icon}
                                    width={28}
                                    height={28}
                                    alt={item.title}
                                    className={isActive ? "opacity-100" : "opacity-50 group-hover:opacity-100"}
                                />
                                <span className="ff-roobert ts-24 lh-120 ls-neg2 font-medium text-(--text-black)">
                                    {item.title}
                                </span>
                            </div>

                            {isActive && (
                                <p className="ff-roobert font-normal ts-18 lh-60 ls-1 text-(--text-gray-muted) pl-10 mt-3">
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
