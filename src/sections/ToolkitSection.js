"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

import ToolkitSidebar from "@/components/ToolkitSidebar";
import ToolkitPreview from "@/components/ToolkitPreview";
import { toolkitItems } from "@/data/toolkit";
import Container from "@/components/UI/Container";

const ToolkitSection = () => {
  const [active, setActive] = useState("chatbots");

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container className="border-r border-l border-border-gray py-[124px] px-[80px]">
        
        <div className="flex justify-between gap-[80px] items-center">

            {/* LEFT PREVIEW */}
            <motion.div 
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1.2, ease: "easeOut" }
                    }
                }}
            >
                <ToolkitPreview active={active} items={toolkitItems} />
            </motion.div>

            {/* RIGHT SIDEBAR NAV */}
            <motion.div 
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1.2, ease: "easeOut" }
                    }
                }}
            >
                <ToolkitSidebar
                    active={active}
                    setActive={setActive}
                    items={toolkitItems}
                />
            </motion.div>

        </div>
        
      </Container>
    </motion.section>
  );
};

export default ToolkitSection;
