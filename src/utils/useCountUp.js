import { useEffect, useState } from "react";

const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(counter);
            }
            setCount(Math.ceil(start));
        }, 16);

        return () => clearInterval(counter);
    }, [end, duration]);

    return count;
}

export default useCountUp;
