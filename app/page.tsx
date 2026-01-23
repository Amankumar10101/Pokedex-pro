import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import { FaUsers, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />

      // {/* Hero Section */}
      // <section className="text-center py-32 bg-gradient-to-r from-blue-500 to-blue-400 text-white">
      //   <h1 className="text-5xl font-bold">Play Pokémon GO Smarter</h1>
      //   <p className="mt-4 text-xl">
      //     Build better teams, find raid counters, and analyze stats
      //   </p>
      // </section>

      {/* Features */}
      <section className="px-20 py-20 grid grid-cols-3 gap-6">
        <FeatureCard
          title="Team Builder"
          desc="Create and analyze competitive Pokémon teams."
          icon={<FaUsers />}
        />
        <FeatureCard
          title="Raid Counters"
          desc="Find the best Pokémon for any raid boss."
          icon={<FaShieldAlt />}
        />
        <FeatureCard
          title="Stat Analytics"
          desc="Understand IVs, CP, and performance."
          icon={<FaChartLine />}
        />
      </section>

      <HowItWorks />

      <CTASection />
    </main>
  );
}
