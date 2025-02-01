import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "./FadeInStaggerTwoChildren";
import Image from "next/image";
import Thumb1Img from "../../../public/h-thumb1.png";
import Thumb2Img from "../../../public/h-thumb2.png";
import Thumb3Img from "../../../public/h-thumb3.png";
import Thumb4Img from "../../../public/h-thumb4.png";
import Thumb5Img from "../../../public/h-thumb5.png";
function HeroThumbs() {
	return (
		<FadeInStaggerTwo className="aximo-hero-thumb-wrap">
			<FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
				<Image src={Thumb1Img} alt="Thumb images" sizes="100vw" />
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
				<Image src={Thumb2Img} alt="Thumb images" sizes="100vw" />
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
				<Image src={Thumb3Img} alt="Thumb images" sizes="100vw" />
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
				<Image src={Thumb4Img} alt="Thumb images" sizes="100vw" />
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="aximo-hero-thumb-item">
				<Image src={Thumb5Img} alt="Thumb images" sizes="100vw" />
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroThumbs;
