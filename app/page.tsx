// import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
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
