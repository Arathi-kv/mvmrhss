import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import Curriculum from '@/components/curriculum/curriculum';

export const metadata = {
  title: "Curriculum",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Curriculum" subtitle="Curriculum" />
        
       <Curriculum  />
        
        <FooterOne />
      </main>
    </Wrapper>
  );
};

export default index;