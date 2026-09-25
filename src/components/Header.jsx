import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import logo from "src/assets/logo.png";
function Header() {
  return (
    <div style={styles.container}>
      <img
        style={{ objectFit: "contain" }}
        src={logo}
        alt="Logo"
        width={60}
        height={60}
      />
      <div style={styles.mainLink}>
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
  );
}

const styles = {
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
    justifyContent: "space-around",
    padding: "0 50px",
  },
};

export default Header;
