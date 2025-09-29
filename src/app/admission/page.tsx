import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import Admission from '@/components/admission/admission';
import AdmissionForm from '@/components/form/AdmissionForm';


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
      <AdmissionForm />
        <FooterOne />
      </main>
    </Wrapper>
  );
};

export default index;