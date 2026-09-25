import Button from "./Button";
import useWindowWidth from "./Usewindowwidth";
import Img2 from "@/assets/img2.png";

function OurBrand() {
    const width = useWindowWidth();
    const isMobile = width < 768;

    return (
        <div style={styles.container}>
            <div
                style={{
                    ...styles.textPanel,
                    width: isMobile ? "100%" : "45%",
                    padding: isMobile ? "30px 24px" : "40px 50px",
                }}
            >
                <h2 style={{ ...styles.heading, fontSize: isMobile ? 22 : 26 }}>
                    Our Brand
                </h2>
                <p style={styles.paragraph}>
                    We Believe That Beauty Thrives In Diversity And Discovery.
                    Our Purpose Is To Expand The Way The World Sees Beauty By
                    Empowering The Extraordinary In Each Of Us.
                </p>
                <Button
                    textColor={"white"}
                    bgColor={"transparent"}
                    borderColor={"white"}
                    child={"Discover More"}
                />
            </div>

            {!isMobile && (
                <img
                    src={Img2}
                    alt="Beautya brand models"
                    style={{ width: "55%", objectFit: "cover" }}
                />
            )}
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        background: "#FAF7F2",
        flexWrap: "wrap",
    },
    textPanel: {
        background: "#4B0024",
        color: "white",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    heading: {
        fontWeight: "bold",
        marginBottom: 14,
    },
    paragraph: {
        fontSize: 13,
        lineHeight: 1.7,
        opacity: 0.9,
        marginBottom: 22,
    },
};

export default OurBrand;
