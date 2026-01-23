import "./../styles/hero.css";

export default function Hero() {
  return (
    <div>

      {/* Title Banner */}
      {/* Blue title banner */}
<div className="title-strip">
  <img src="/title.png" alt="Title Background" className="title-bg" />

  <div className="title-overlay">
    <h1>Play Pokémon GO Smarter</h1>
    <p>Build better teams, find raid counters, and analyze stats</p>
  </div>
</div>

      {/* Pokemon Banner */}
      <div className="pokemon-banner">
        <img src="/hero.png" alt="Pokemon Banner" />
      </div>

    </div>
  );
}
