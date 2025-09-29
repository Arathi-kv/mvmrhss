
// "use client"


import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import HeroHomeTwo from '@/components/hero/HeroHomeTwo';

import BrandHomeTwo from '@/components/brand/BrandHomeTwo';
import FooterOne from '@/layouts/footers/FooterOne';


// import { Metadata } from 'next';
// export const metadata: Metadata = {
//   title: 'Tecch - Technology & IT Solutions Next js Template',
//   description: 'Tecch - Technology & IT Solutions Next js Template',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

// if(typeof window !== 'undefined') {
//   require("bootstrap/dist/js/bootstrap");
// }

const index = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <HeroHomeTwo />
    
       
        <BrandHomeTwo />
      </main>
      <FooterOne style_2={true} />
    </Wrapper>
  );
};

export default index;