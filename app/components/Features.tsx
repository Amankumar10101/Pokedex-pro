import Image from "next/image";
import "@/styles/features.css";

export default function Features() {
  return (
    <section className="features-section">
      {/* BLOCK 1 */}
      <div className="features-container">
        <div className="features-image">
          <Image src="/team (2).png" alt="Team Builder" width={420} height={520} />
        </div>

        <div className="features-content">
          <h2>Team Builder</h2>
          <p>
            Build competitive Pokémon GO teams with type advantages,
            weaknesses, and synergy insights.
          </p>
        </div>
      </div>

      {/* BLOCK 2 (REVERSED) */}
      <div className="features-container reverse">
        <div className="features-image">
          <Image src="/raid.png" alt="Raid Counters" width={420} height={520} />
        </div>

        <div className="features-content">
          <h2>Raid Counters</h2>
          <p>
            Find the best counters for raids with damage output,
            survivability, and move effectiveness.
          </p>
        </div>
      </div>

      {/* BLOCK 3 */}
      <div className="features-container">
        <div className="features-image">
          <Image src="/stats.png" alt="Stat Analytics" width={360} height={360} />
        </div>

        <div className="features-content">
          <h2>Stat Analytics</h2>
          <p>
            Understand IVs, CP scaling, and performance metrics
            to power up Pokémon efficiently.
          </p>
        </div>
      </div>
    </section>
  );
}
