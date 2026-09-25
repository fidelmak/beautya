import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Logo from "@/assets/logo.png";

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div style={styles.container}>
        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={styles.menuButton}
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faXmark : faBars}
            color={"black"}
          />
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div style={styles.dropdown}>
            <a href="" style={styles.link}>
              Women Make up
            </a>

            <a href="" style={styles.link}>
              Women Skin Care
            </a>

            <a href="" style={styles.link}>
              Gift & Sets
            </a>

            <a href="" style={styles.link}>
              Branches
            </a>

            <a href="" style={styles.link}>
              Our Brand
            </a>
          </div>
        )}

        <img
          style={{ objectFit: "contain" }}
          src={Logo}
          alt="Logo"
          width={60}
          height={60}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "10px",
            marginBottom: 12,
          }}
        >
          <FontAwesomeIcon
            icon={faSearch}
            style={{ width: "12px", height: "12px" }}
          />
          <a href="" style={styles.link}>
            |
          </a>
          <FontAwesomeIcon
            icon={faGlobe}
            style={{ width: "12px", height: "12px" }}
          />
          <a href="" style={styles.link}>
            US(En)
          </a>
        </div>
      </div>
    </>
  );
}

const styles = {
  menuButton: {
    border: "none",
    background: "transparent",
    fontSize: "24px",
    cursor: "pointer",
    padding: "10px 20px ",
    marginTop: "16px",
  },

  dropdown: {
    position: "absolute",
    top: "55px",
    left: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: "20px",
    gap: "20px",
    boxSizing: "border-box",
    zIndex: 1000,
  },
  mainLink: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "30px",
    marginBottom: 12,
  },
  link: {
    fontWeight: "bold",
    fontSize: 12,
    textDecoration: "none",
    color: "black",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    background: "linear-gradient(135deg, #EBC5C5, #ffffff,#EBC5C5)",
    height: "10%",
    width: "100%",
    justifyContent: "space-between",
    padding: "0 20px",
  },
};
export default MobileHeader;
