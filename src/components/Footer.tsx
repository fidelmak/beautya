import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faPhone,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faPinterestP,
  faTiktok,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";

import Button from "./Button";

interface FooterProps {
  screenSize: number;
}

function Footer({ screenSize }: FooterProps) {
  const isMobile = screenSize < 768;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer style={styles.footer}>
      {/* Main Footer */}
      <div
        style={{
          ...styles.mainFooter,
          ...(isMobile ? styles.mobileMainFooter : {}),
        }}
      >
        {/* Help */}
        <div style={styles.column}>
          <h3
            style={{
              ...styles.title,
              ...(isMobile ? styles.mobileTitle : {}),
            }}
          >
            How Can We Help?
          </h3>

          <a href="#" style={styles.link}>
            Beautya Branches
          </a>

          <a href="#" style={styles.link}>
            Contact Us
          </a>

          <a href="#" style={styles.link}>
            FAQ
          </a>

          <a href="#" style={styles.link}>
            Our Brand
          </a>

          <a href="#" style={styles.link}>
            Blog
          </a>
        </div>

        {/* Products */}
        <div style={styles.column}>
          <h3
            style={{
              ...styles.title,
              ...(isMobile ? styles.mobileTitle : {}),
            }}
          >
            Products
          </h3>

          <a href="#" style={styles.link}>
            Women Make Up
          </a>

          <a href="#" style={styles.link}>
            Women Skincare
          </a>

          <a href="#" style={styles.link}>
            Gifts & Sets
          </a>
        </div>

        {/* Newsletter */}
        <div
          style={{
            ...styles.newsletter,
            ...(isMobile ? styles.mobileNewsletter : {}),
          }}
        >
          <h3
            style={{
              ...styles.title,
              ...(isMobile ? styles.mobileTitle : {}),
            }}
          >
            Keep In Touch With Beautya
          </h3>

          <p style={styles.description}>
            Join The Beautya Newsletter And Be First To Hear About News, Offers
            And Skincare Advice
          </p>

          <div
            style={{
              ...styles.subscribeContainer,
              ...(isMobile ? styles.mobileSubscribeContainer : {}),
            }}
          >
            <input
              type="email"
              placeholder="Email Address"
              style={styles.input}
            />

            <Button textColor="white" bgColor="transparent" child="Subscribe" />
          </div>

          <label style={styles.checkboxContainer}>
            <input type="checkbox" />

            <span>
              By Submitting Your Email, You Agree To Receive Advertising Emails
              From Beautya. Please Review Our Privacy Policy, Which Includes Our
              Financial Incentive Notice For CA Residents.
            </span>
          </label>
        </div>
      </div>

      {/* Contact + Social */}
      <div
        style={{
          ...styles.contactSection,
          ...(isMobile ? styles.mobileContactSection : {}),
        }}
      >
        {/* Location */}
        <div style={styles.contactItem}>
          <FontAwesomeIcon icon={faLocationDot} style={styles.icon} />

          <span>Dr. Richardson, California</span>
        </div>

        {/* Phone */}
        <div style={styles.contactItem}>
          <FontAwesomeIcon icon={faPhone} style={styles.icon} />

          <span>1-802-526-2463</span>
        </div>

        {/* Socials */}
        <div
          style={{
            ...styles.socials,
            ...(isMobile ? styles.mobileSocials : {}),
          }}
        >
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faPinterestP} />
          <FontAwesomeIcon icon={faRedditAlien} />
          <FontAwesomeIcon icon={faTiktok} />
        </div>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          style={{
            ...styles.scrollTop,
            ...(isMobile ? styles.mobileScrollTop : {}),
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>

      {/* Bottom */}
      <div
        style={{
          ...styles.bottomSection,
          ...(isMobile ? styles.mobileBottomSection : {}),
        }}
      >
        <span>© 2023 Beautya. All Rights Reserved.</span>

        <div style={styles.bottomLinks}>
          <a href="#" style={styles.bottomLink}>
            Terms & Conditions
          </a>

          <a href="#" style={styles.bottomLink}>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    width: "100%",
    color: "white",
  },

  /* ================= DESKTOP ================= */

  mainFooter: {
    backgroundColor: "#4B0024",
    minHeight: "310px",
    display: "flex",
    padding: "50px 7%",
    gap: "80px",
    boxSizing: "border-box" as const,
  },

  column: {
    display: "flex",
    flexDirection: "column" as const,
    minWidth: "180px",
  },

  newsletter: {
    flex: 1,
    maxWidth: "600px",
  },

  title: {
    fontSize: "20px",
    margin: "10px 0 18px",
    fontWeight: 700,
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "13px",
    marginBottom: "12px",
  },

  description: {
    fontSize: "13px",
    lineHeight: 1.7,
    margin: "0 0 15px",
  },

  subscribeContainer: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid white",
    paddingBottom: "5px",
    maxWidth: "450px",
  },

  input: {
    flex: 1,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    color: "white",
    fontSize: "16px",
    padding: "10px",
  },

  checkboxContainer: {
    display: "flex",
    gap: "8px",
    marginTop: "10px",
    fontSize: "11px",
    lineHeight: 1.6,
    maxWidth: "500px",
  },

  contactSection: {
    position: "relative" as const,
    minHeight: "55px",
    backgroundColor: "#3B001C",
    display: "flex",
    alignItems: "center",
    padding: "0 7%",
    gap: "35px",
  },

  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "13px",
  },

  icon: {
    color: "#F72585",
  },

  socials: {
    marginLeft: "auto",
    display: "flex",
    gap: "25px",
    color: "#F72585",
    fontSize: "18px",
  },

  scrollTop: {
    width: "42px",
    height: "42px",
    backgroundColor: "white",
    border: "none",
    color: "#B0005A",
    fontSize: "18px",
    cursor: "pointer",
    marginLeft: "20px",
  },

  bottomSection: {
    minHeight: "42px",
    backgroundColor: "#200010",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 7%",
    fontSize: "10px",
    boxSizing: "border-box" as const,
  },

  bottomLinks: {
    display: "flex",
    gap: "30px",
  },

  bottomLink: {
    color: "white",
    textDecoration: "none",
  },

  /* ================= MOBILE ================= */

  mobileMainFooter: {
    flexDirection: "column" as const,
    minHeight: "auto",
    padding: "20px",
    gap: "5px",
  },

  mobileTitle: {
    fontSize: "14px",
    margin: "10px 0 12px",
  },

  mobileNewsletter: {
    width: "100%",
    maxWidth: "100%",
  },

  mobileSubscribeContainer: {
    maxWidth: "100%",
    width: "100%",
  },

  mobileContactSection: {
    flexDirection: "column" as const,
    alignItems: "flex-start",
    minHeight: "auto",
    padding: "20px",
    gap: "20px",
  },

  mobileSocials: {
    marginLeft: 0,
    width: "100%",
    justifyContent: "space-between",
    gap: "0",
    paddingTop: "5px",
  },

  mobileScrollTop: {
    display: "none",
  },

  mobileBottomSection: {
    flexDirection: "column" as const,
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "15px",
    padding: "15px 20px",
    minHeight: "65px",
  },
};

export default Footer;
