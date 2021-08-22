import React from "react";
import MetaTags from "react-meta-tags";
import CTA from "../../Components/General/CTA/CTA";
import Footer from "../../Components/General/Footer/Footer";
import Section1 from "./Subsections/Section1/index";
import Section2 from "./Subsections/Section2/index";
import Section3 from "./Subsections/Section3/index";

function Driver() {
  return (
    <div>
      <MetaTags>
        <title>County Bites - Driver</title>
        <meta
          name="description"
          content="Earn more per delivery than DoorDash, UberEats, or GrubHub. Tiered pay system allows you to maximize earning potential."
        />
      </MetaTags>
      <Section1 />
      <Section2 />
      <Section3 />
      <CTA />
      <Footer />
    </div>
  );
}

export default Driver;
