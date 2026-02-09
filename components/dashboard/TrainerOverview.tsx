"use client";
import { useDashboard } from "@/context/DashboardContext";
import "./trainerOverview.css";

export default function TrainerOverview() {
  const { trainer } = useDashboard();

  const progress = Math.round((trainer.xp / trainer.xpToNext) * 100);

  return (
    <div className="trainer-overview">
      <div className="trainer-card main">
        <h2>{trainer.name}</h2>
        <p>Level {trainer.level}</p>

        <div className="xp-bar">
          <div className="xp-fill" style={{ width: `${progress}%` }} />
        </div>
        <span>{trainer.xp} / {trainer.xpToNext} XP</span>
      </div>

      <div className="trainer-card">
        <h3>Pokémon</h3>
        <p>{trainer.pokemonCount}</p>
      </div>

      <div className="trainer-card">
        <h3>Teams</h3>
        <p>{trainer.teams}</p>
      </div>

      <div className="trainer-card">
        <h3>Battles</h3>
        <p>{trainer.battles}</p>
      </div>
    </div>
  );
}
