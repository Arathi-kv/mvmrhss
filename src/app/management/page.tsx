import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '@/components/common/Breadcrumb';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import FunfactHomeOne from '@/components/funfact/FunfactHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
import BusinessAbout from '@/components/business/BusinessAbout';
import TeamHomeTwo from '../../components/management/TeamHomeTwo';

export const metadata = {
  title: "Management",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <main>
        <Breadcrumb title="Management" subtitle="Management" />
        <TeamHomeTwo></TeamHomeTwo>
        <FooterOne />
      </main>
    </Wrapper>
  );
};

export default index;