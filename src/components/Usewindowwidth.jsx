import { useState, useEffect } from "react";

// Tracks viewport width so components can switch their inline style
// objects (flexDirection, font sizes, etc.) at mobile breakpoints,
// since plain JS objects can't hold @media queries.
function useWindowWidth() {
    const [width, setWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1200,
    );

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

export default useWindowWidth;
