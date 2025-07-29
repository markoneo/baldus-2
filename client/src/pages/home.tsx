import Header from "@/components/header";
import Hero from "@/components/hero";
import WhyChooseUs from "@/components/why-choose-us";
import MissionPromise from "@/components/mission-promise";
import AboutUs from "@/components/about-us";
import Services from "@/components/services";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <Hero />
      <WhyChooseUs />
      <MissionPromise />
      <AboutUs />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
