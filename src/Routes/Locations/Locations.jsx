import React from "react";
import MetaTags from "react-meta-tags";
import Footer from "../../Components/General/Footer/Footer";
import Section1 from "./Subsections/Section1/index";
import Section2 from "./Subsections/Section2/index";

function Locations() {
  return (
    <div>
      <MetaTags>
        <title>County Bites - Location</title>
        <meta
          name="description"
          content="Serving rural areas with the best local food. Restaurant and food truck delivery near you."
        />
      </MetaTags>
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default Locations;
