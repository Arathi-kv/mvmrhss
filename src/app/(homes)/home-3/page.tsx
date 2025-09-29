 

import React from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import BrandHomeOne from '@/components/brand/BrandHomeOne';


 
const index = () => {
	return (
		<Wrapper>
			<HeaderThree />
			<main>
				<HeroHomeThree />
				<BrandHomeOne style_2={true} />
			</main>
			<FooterOne />
		</Wrapper>
	);
};

export default index;
