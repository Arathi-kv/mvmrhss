

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';


export const metadata = {
  title: "About us",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="About Us" subtitle="About Us" />
        <AboutHomeOne style_2={true} />
        <VideoHomeOne />
        <FooterOne />
      </main>
    </Wrapper>
  );
};

export default index;