import React, { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import CTA from "../../Components/General/CTA/CTA";
import Footer from "../../Components/General/Footer/Footer";
import Section1 from "./Subsections/Section1/index";
import Section2 from "./Subsections/Section2/index";
import Section3 from "./Subsections/Section3/index";
import Section4 from "./Subsections/Section4/index";
import Section5 from "./Subsections/Section5/index";

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth - windowWidth * 0);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div>
      <MetaTags>
        <title>County Bites - Home</title>
        <meta
          name="description"
          content="Share with friends what you’re eating and more. Breakfast, lunch, and dinner delivered to your doorstep."
        />
      </MetaTags>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
