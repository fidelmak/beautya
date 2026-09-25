import Button from "./Button";
import useWindowWidth from "./Usewindowwidth";
import Img3 from "@/assets/Img3.png";

function SpecialOffers() {
    const width = useWindowWidth();
    const isMobile = width < 768;

    return (
        <div
            style={{
                ...styles.container,
                flexDirection: isMobile ? "column" : "row",
                padding: isMobile ? "20px" : "20px 60px",
            }}
        >
            <div
                style={{
                    ...styles.promoImage,
                    width: isMobile ? "100%" : "50%",
                    height: isMobile ? 220 : 320,
                }}
            >
                <img
                    src={Img3}
                    alt="Save up to 50% off"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>

            <div
                style={{
                    ...styles.textPanel,
                    width: isMobile ? "100%" : "50%",
                    padding: isMobile ? "24px 8px" : "20px 60px",
                }}
            >
                <p style={styles.eyebrow}>Special Offers</p>
                <h2 style={{ ...styles.heading, fontSize: isMobile ? 24 : 30 }}>
                    Save Up To 50%
                </h2>
                <p style={styles.paragraph}>
                    Mother's Day Is Coming! For Everything She's Given You, It's
                    Time To Give Back. Shower Her With Love, Happiness, And The
                    Best Of Beautya.
                </p>
                <p style={styles.callout}>
                    Visit Your Local Beautya Branches To Find Out More About Our
                    Special Offers In Make Up And Skincare Products.
                </p>
                <Button
                    textColor={"white"}
                    bgColor={"#7A1F4B"}
                    borderColor={"#7A1F4B"}
                    child={"Find Branches"}
                />
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        width: "100%",
        background: "#FDF3F3",
        alignItems: "center",
    },
    promoImage: {
        overflow: "hidden",
    },
    textPanel: {
        boxSizing: "border-box",
    },
    eyebrow: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#1a1a1a",
        marginBottom: 8,
    },
    heading: {
        fontWeight: "bold",
        color: "#7A1F4B",
        marginBottom: 14,
    },
    paragraph: {
        fontSize: 13,
        lineHeight: 1.7,
        color: "#333",
        marginBottom: 14,
    },
    callout: {
        fontSize: 13,
        lineHeight: 1.7,
        color: "#7A1F4B",
        fontWeight: "bold",
        marginBottom: 20,
    },
};

export default SpecialOffers;
