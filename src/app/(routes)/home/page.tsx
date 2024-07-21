import SectionFive from "@/app/_components/Home/Sections/SectionFive";
import SectionFour from "@/app/_components/Home/Sections/SectionFour";
import SectionOne from "@/app/_components/Home/Sections/SectionOne";
import SectionSix from "@/app/_components/Home/Sections/SectionSix";
import SectionThree from "@/app/_components/Home/Sections/Sectionthree";
import SectionTwo from "@/app/_components/Home/Sections/SectionTwo";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="px-10 mb-10">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
      <SectionSix />
    </>
  );
};

export default HomePage;
