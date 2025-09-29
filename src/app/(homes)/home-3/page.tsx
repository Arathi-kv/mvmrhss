 

import React from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import HeroHomeThree from "@/components/hero/HeroHomeThree";

 
const index = () => {
	return (
		<Wrapper>
			<HeaderThree />
			<main>
				<HeroHomeThree />
		
			
			</main>
			<FooterOne />
		</Wrapper>
	);
};

export default index;
