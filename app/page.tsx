import AboutComponent from "./components/AboutComponent";
import CaseStudy from "./components/CaseStudy";
import Footer from "./components/Footer";
import HeroSecton from "./components/HeroSecton";
import Navbar from "./components/Navbar";
import TrustedTech from "./components/TrustedTech";
import WhatWeBuild from "./components/WhatWeBuild";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSecton />
      <main className="container mx-auto">
        <AboutComponent />
        <WhatWeBuild />
        <CaseStudy />
        <WhyChooseUs />
      </main>
      <TrustedTech />
      <Footer />
    </div>
  );
}
