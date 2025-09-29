import React from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import HeroHomeThree from "@/components/hero/HeroHomeThree"; // <-- make sure this path matches your structure

const Index = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <HeroHomeThree />
        <BrandHomeOne />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default Index;
