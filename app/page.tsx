import HowItWorks from "@/landingPage/HowItWorks";
import CTASection from "@/landingPage/CTASection";
import Hero from "@/landingPage/Hero";
import Features from "@/landingPage/Features";
import { FaUsers, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-white">
      {/* <Navbar /> */}
      <Hero />
      <Features />    

      <HowItWorks />

      <CTASection />
    </main>
  );
}
