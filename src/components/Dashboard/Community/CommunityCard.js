import Image from "next/image";

export default function CommunityCard({ post }) {
    return (
        <div className={[
            "w-[300px] xl:w-[262px]",
            "bg-[#1A1D21]",
            "rounded-xl",
            "border border-[#2A3036]",
            "py-3 px-4",
            "flex flex-col justify-between gap-2"
        ].join(" ")}
        >
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
                <Image
                    src={post.avatar}
                    width={36}
                    height={36}
                    className="rounded-full"
                    alt={post.username}
                />
                <div>
                    <p className="font-medium ff-inter text-[14px] lh-150 ls-neg1 text-white">{post.username}</p>
                    <p className="ff-inter font-normal text-[14px] lh-150 ls-0 text-[#97A3B6]">{post.time}</p>
                </div>
            </div>

            {/* Content */}
            <p className="ff-inter font-normal text-[14px] lh-150 ls-0 text-white">
                {post.message}
            </p>

            {/* Footer */}
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                    <Image
                        src="/image/dashboard/icon-heart.svg"
                        width={14}
                        height={14}
                        alt="Heart"
                    />
                    <span className="ff-inter font-normal text-[14px] lh-150 ls-0 text-[#F8FAFC]">{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Image
                        src="/image/dashboard/icon-message.svg"
                        width={14}
                        height={14}
                        alt="Message"
                    />
                    <span className="ff-inter font-normal text-[14px] lh-150 ls-0 text-[#F8FAFC]">{post.comments}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Image
                        src="/image/dashboard/icon-share.svg"
                        width={14}
                        height={14}
                        alt="Share"
                    />
                </div>
            </div>
        </div>
    );
}
