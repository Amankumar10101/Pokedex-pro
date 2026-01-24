import "../styles/features.css";

export default function Features() {
  return (
    <section className="features">

      {/* Block 1 */}
      <div className="feature-row">
        <img src="/images/team.png" alt="Team Builder" />
        <div className="feature-text">
          <h2>Team Builder</h2>
          <p>Create and analyze competitive Pokémon teams.</p>
        </div>
      </div>

      {/* Block 2 */}
      <div className="feature-row reverse">
        <div className="feature-text">
          <h2>Raid Counters</h2>
          <p>Find the best Pokémon for any raid boss.</p>
        </div>
        <img src="/images/raid.png" alt="Raid Counters" />
      </div>

      {/* Block 3 */}
      <div className="feature-row">
        <img src="/images/stats.png" alt="Stat Analytics" />
        <div className="feature-text">
          <h2>Stat Analytics</h2>
          <p>Understand IVs, CP, and performance.</p>
        </div>
      </div>

    </section>
  );
}
