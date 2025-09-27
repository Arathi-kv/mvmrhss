
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import ProjectHomeOne from '@/components/project/ProjectHomeOne';
import TestimonialHomeOne from '@/components/testimonial/TestimonialHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';




export const metadata = {
  title: "M.V.M Higher Secondary School",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <HeroHomeOne />
       
       <AboutHomeOne style_2={true} />
        <TestimonialHomeOne />
        <ProjectHomeOne />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;