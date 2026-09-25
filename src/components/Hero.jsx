import Button from "./Button";
import useWindowWidth from "./Usewindowwidth";

function Hero() {
    const width = useWindowWidth();
    const isMobile = width < 768;

    return (
        <div
            style={{
                ...styles.container,
                height: isMobile ? "380px" : "520px",
            }}
        >
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: isMobile ? "0 24px" : 0,
                    textAlign: "center",
                }}
            >
                <h1
                    style={{
                        color: "white",
                        fontSize: isMobile ? "26px" : "40px",
                        lineHeight: 1.3,
                        marginTop: 0,
                    }}
                >
                    Unlock Your Natural Glow
                </h1>
                <br />
                <Button
                    textColor={"white"}
                    bgColor={"transparent"}
                    borderColor={"white"}
                    child={"Know More"}
                />
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundImage: `
      linear-gradient(rgba(1, 0, 0, 0.56), rgba(1, 0, 0, 0.49)),
      url("/src/assets/heroimage.png")
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    },
};
export default Hero;
