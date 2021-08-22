import React from "react";
import MetaTags from "react-meta-tags";
import CTA from "../../Components/General/CTA/CTA";
import Footer from "../../Components/General/Footer/Footer";
import Section1 from "./Subsections/Section1/index";
import Section2 from "./Subsections/Section2/index";
import Section3 from "./Subsections/Section3/index";

function Merchant() {

  return (
    <div>
      <MetaTags>
        <title>County Bites - Merchant</title>
        <meta
          name="description"
          content="Lowest commission of all delivery platforms. Reach an entire new audience and track data with advanced analytics and reporting."
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

export default Merchant;
