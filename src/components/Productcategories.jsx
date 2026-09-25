import useWindowWidth from "./Usewindowwidth";

const categories = [
    { label: "Women Make Up", image: "src/assets/img5.png" },
    { label: "Women Skincare", image: "src/assets/img5.png" },
    { label: "Gifts & Sets", image: "src/assets/img5.png" },
];

function ProductCategories() {
    // eslint-disable-next-line no-undef
    const width = useWindowWidth();
    const isMobile = width < 768;

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Products' Categories</h2>
            <div
                style={{
                    ...styles.grid,
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                }}
            >
                {categories.map((cat) => (
                    <a key={cat.label} href="" style={styles.card}>
                        <img
                            src={cat.image}
                            alt={cat.label}
                            style={styles.image}
                        />
                        <p style={styles.label}>{cat.label}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: "50px 40px",
        background: "#FAF7F2",
        textAlign: "center",
    },
    heading: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 30,
        color: "#1a1a1a",
    },
    grid: {
        display: "grid",
        gap: 24,
        maxWidth: 1100,
        margin: "0 auto",
    },
    card: {
        textDecoration: "none",
        color: "#1a1a1a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    image: {
        width: "100%",
        aspectRatio: "1 / 1",
        objectFit: "cover",
        marginBottom: 14,
    },
    label: {
        fontSize: 14,
        fontWeight: 500,
    },
};

export default ProductCategories;
