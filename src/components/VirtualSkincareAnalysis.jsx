import Button from "./Button";
import useWindowWidth from "./Usewindowwidth";

function VirtualSkincareAnalysis() {
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
          NEW Virtual Skincare Analysis
        </h2>
        <p style={styles.paragraph}>
          Looking For A Full Skincare Routine? Our NEW Virtual Skincare Analysis
          Tool Evaluates Your Skin And Provides The Most Personalized
          Recommendations.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: 20,
            marginTop: 20,
          }}
        >
          <div>
            <p style={styles.scanText}>Scan With Your Phone To Get Started</p>
            <p style={styles.orText}>Or</p>
            <Button
              textColor={"white"}
              bgColor={"transparent"}
              borderColor={"white"}
              child={"Answer A Few Questions"}
            />
          </div>

          <img
            src="src/assets/qr.png"
            alt="Scan to start virtual skincare analysis"
            width={110}
            height={110}
            style={{ background: "white", padding: 6 }}
          />
        </div>
      </div>

      {!isMobile && (
        <img
          src="src/assets/img4.png"
          alt="Models with diverse skin tones"
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
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 14,
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 1.7,
    opacity: 0.9,
    marginBottom: 18,
  },
  scanText: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 4,
  },
  orText: {
    fontSize: 12,
    marginBottom: 10,
  },
};

export default VirtualSkincareAnalysis;
