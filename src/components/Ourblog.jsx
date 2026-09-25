import useWindowWidth from "./Usewindowwidth";

const posts = [
    {
        title: "How to get clear skin fast",
        category: "Skincare",
        author: "Dr. Wade Warren",
        date: "Jan 20, 2021",
        excerpt:
            "Many People Find It Difficult To Get Clear Skin. The Methods For Getting Clear Skin Will Vary...",
        image: "src/assets/img1.png",
    },
    {
        title: "How to get clear skin fast",
        category: "Skincare",
        author: "Dr. Wade Warren",
        date: "Jan 20, 2021",
        excerpt:
            "Many People Find It Difficult To Get Clear Skin. The Methods For Getting Clear Skin Will Vary...",
        image: "src/assets/img1.png",
    },
    {
        title: "How to get clear skin fast",
        category: "Skincare",
        author: "Dr. Wade Warren",
        date: "Jan 20, 2021",
        excerpt:
            "Many People Find It Difficult To Get Clear Skin. The Methods For Getting Clear Skin Will Vary...",
        image: "src/assets/img1.png",
    },
];

function OurBlog() {
    const width = useWindowWidth();
    const isMobile = width < 768;

    return (
        <div style={styles.container}>
            <div style={styles.headerRow}>
                <h2 style={styles.heading}>Our Blog</h2>
                <a href="" style={styles.viewAll}>
                    View All
                </a>
            </div>

            <div
                style={{
                    ...styles.grid,
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                }}
            >
                {posts.map((post, i) => (
                    <a key={i} href="" style={styles.card}>
                        <img
                            src={post.image}
                            alt={post.title}
                            style={styles.image}
                        />
                        <h3 style={styles.postTitle}>{post.title}</h3>
                        <p style={styles.meta}>
                            {post.category} | {post.author} | {post.date}
                        </p>
                        <p style={styles.excerpt}>{post.excerpt}</p>
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
    },
    headerRow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginBottom: 30,
        maxWidth: 1100,
        margin: "0 auto 30px auto",
    },
    heading: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#1a1a1a",
        margin: "0 auto",
    },
    viewAll: {
        position: "absolute",
        right: 0,
        fontSize: 13,
        fontWeight: "bold",
        color: "#7A1F4B",
        textDecoration: "none",
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
        background: "white",
        border: "1px solid #eee",
    },
    image: {
        width: "100%",
        height: 200,
        objectFit: "cover",
    },
    postTitle: {
        fontSize: 16,
        fontWeight: "bold",
        margin: "14px 16px 6px 16px",
    },
    meta: {
        fontSize: 11,
        color: "#888",
        margin: "0 16px 10px 16px",
    },
    excerpt: {
        fontSize: 12,
        color: "#555",
        lineHeight: 1.6,
        margin: "0 16px 16px 16px",
    },
};

export default OurBlog;
