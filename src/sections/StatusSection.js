"use client";

import { useInView } from "react-intersection-observer";
import CounterCard from "@/components/UI/CounterCard";
import Container from "@/components/UI/Container";

const StatusSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className="border-t border-b border-border-gray bg-white">
            <Container className="flex justify-between px-0! border-r border-l border-border-gray">
                <CounterCard 
                    value={2} 
                    suffix="M+"
                    label="Customers"
                    sublabel="building with Moniveo"
                    active={inView}
                />

                <CounterCard 
                    value={3} 
                    prefix="SOC " 
                    label="Standards for"
                    sublabel="security and compliance."
                    active={inView}
                />

                <CounterCard 
                    value={98} 
                    suffix="%" 
                    label="Enterprise SLA"
                    sublabel="Volumes block storage"
                    active={inView}
                />
            </Container>
        </section>
    );
};

export default StatusSection;
