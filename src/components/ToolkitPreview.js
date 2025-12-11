"use client";

import Image from "next/image";

const ToolkitPreview = (props) => {
    const { active, items } = props;
    const item = items.find((i) => i.id === active);

    return (
        <div
            key={active}
            className="flex-1 max-w-[540px]"
        >
            <Image 
                src={item.preview}
                width={540}
                height={420}
                alt={item.title}
                className="rounded-xl shadow-lg"
            />
        </div>
    );
}

export default ToolkitPreview;

