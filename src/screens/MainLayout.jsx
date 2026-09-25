import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import VirtualSkincareAnalysis from "../components/VirtualSkincareAnalysis";
import MobileHeader from "../components/MobileHeader";
import SpecialOffers from "../components/Specialoffers";
import OurBrand from "../components/Ourbrand";
import BestSellers from "../components/Bestsellers";
import ProductCategories from "../components/Productcategories";
import OurBlog from "../components/Ourblog";

import { useEffect, useState } from "react";

function MainLayout() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={styles.container}>
      {screenSize < 900 ? <MobileHeader /> : <Header />}

      <main style={styles.content}>
        <Hero />
        <center>
          <ProductCategories />
          <OurBrand />
          <BestSellers />
          <SpecialOffers />
          <VirtualSkincareAnalysis />
          <OurBlog />
        </center>
      </main>

      <Footer screenSize={screenSize} />
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#dfdfdf",
    minHeight: "100vh",
  },
  content: {
    flex: 1,
  },
};

export default MainLayout;
