import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import Admission from '@/components/Admission/Admission';
import Admissionform from '@/components/form/Admissionform';

export const metadata = {
  title: "Admission",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Admission" subtitle="Admission" />
        
      <Admission />
   <Admissionform />
        <FooterOne />
      </main>
    </Wrapper>
  );
};

export default index;