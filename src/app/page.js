import Image from "next/image";
import Header from "./components/Header";
import HeroThumbs from "./components/HeroThumbs";
import HeroContent from "./components/HeroContent";
import HeroBg from "../../public/hero-bg.png";
import AboutUs from "./components/Aboutus";
import StatsSection from "./components/StatsSection";
import Footer from "./components/Footer";
import TrendingBrands from "./components/TrendingBrands";
import NewsletterForm from "./components/NewsletterForm"

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative mx-[50px] lg:mx-[50px] md:mx-[30px] sm:mx-[12px] mt-[120px] rounded-[20px] overflow-hidden h-[600px] lg:h-[700px]">
        {/* Background image */}
        <Image
          src={HeroBg}
          alt="Hero Background"
          fill
          className="object-cover object-center"
          quality={100}
          priority
        />

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Hero content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <HeroContent />
          </div>
        </div>
      </div>
      <AboutUs />
      <HeroThumbs />
      <StatsSection />
      <TrendingBrands />
      <TrendingBrands />
      <NewsletterForm />
      <Footer />

    </>
  );
}