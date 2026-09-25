import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import useWindowWidth from "./Usewindowwidth";

const allProducts = [
    {
        name: "Beautya Capture Total Dreamskin Care & Perfect",
        description:
            "Plumping Gloss - Instant And Long-Term Volume Effect - 24h Hydration",
        price: "$76.00",
        image: "src/assets/img5.png",
    },
    {
        name: "Beautya Capture Total Dreamskin Care & Perfect",
        description:
            "Plumping Gloss - Instant And Long-Term Volume Effect - 24h Hydration",
        price: "$76.00",
        image: "src/assets/img5.png",
    },
    {
        name: "Beautya Capture Total Dreamskin Care & Perfect",
        description:
            "Plumping Gloss - Instant And Long-Term Volume Effect - 24h Hydration",
        price: "$76.00",
        image: "src/assets/img5.png",
    },
    {
        name: "Beautya Capture Total Dreamskin Care & Perfect",
        description:
            "Plumping Gloss - Instant And Long-Term Volume Effect - 24h Hydration",
        price: "$76.00",
        image: "src/assets/img5.png",
    },
];

function BestSellers() {
    const width = useWindowWidth();
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const visibleCount = isMobile ? 1 : isTablet ? 2 : 4;

    const [start, setStart] = useState(0);
    const maxStart = allProducts.length - visibleCount;

    const goPrev = () => setStart((s) => Math.max(0, s - 1));
    const goNext = () => setStart((s) => Math.min(maxStart, s + 1));

    const visibleProducts = allProducts.slice(start, start + visibleCount);

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Our Best Sellers</h2>

            <div style={styles.carouselRow}>
                <button
                    onClick={goPrev}
                    disabled={start === 0}
                    style={{
                        ...styles.arrowBtn,
                        opacity: start === 0 ? 0.3 : 1,
                    }}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <div
                    style={{
                        ...styles.grid,
                        gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
                    }}
                >
                    {visibleProducts.map((p, i) => (
                        <a key={i} href="" style={styles.card}>
                            <div style={styles.imageWrap}>
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    style={styles.image}
                                />
                            </div>
                            <p style={styles.name}>{p.name}</p>
                            <p style={styles.description}>{p.description}</p>
                            <p style={styles.price}>{p.price}</p>
                        </a>
                    ))}
                </div>

                <button
                    onClick={goNext}
                    disabled={start === maxStart}
                    style={{
                        ...styles.arrowBtn,
                        opacity: start === maxStart ? 0.3 : 1,
                    }}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: "50px 20px",
        background: "#FAF7F2",
        textAlign: "center",
    },
    heading: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 30,
        color: "#1a1a1a",
    },
    carouselRow: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        maxWidth: 1100,
        margin: "0 auto",
    },
    arrowBtn: {
        background: "white",
        border: "1px solid #ddd",
        borderRadius: "50%",
        width: 36,
        height: 36,
        flexShrink: 0,
        cursor: "pointer",
    },
    grid: {
        display: "grid",
        gap: 20,
        flex: 1,
    },
    card: {
        textDecoration: "none",
        color: "#1a1a1a",
        textAlign: "left",
    },
    imageWrap: {
        background: "#EFEFEF",
        marginBottom: 14,
    },
    image: {
        width: "100%",
        aspectRatio: "1 / 1",
        objectFit: "contain",
    },
    name: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#7A1F4B",
        lineHeight: 1.4,
        marginBottom: 6,
    },
    description: {
        fontSize: 12,
        color: "#666",
        lineHeight: 1.5,
        marginBottom: 8,
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#1a1a1a",
    },
};

export default BestSellers;
