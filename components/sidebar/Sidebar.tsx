"use client";
import "./Sidebar.css";
import { useDashboard } from "@/context/DashboardContext";

export default function Sidebar() {
  const {
    search,
    setSearch,
    minCP,
    setMinCP,
    type,
    setType,
    battleMode,
    setBattleMode,
  } = useDashboard();

  return (
    <aside className="sidebar">

      {/* Search */}
      <div className="section">
        <input
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Type Filter */}
      <div className="section">
        <h4>Type</h4>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All</option>
          <option value="Normal">Normal</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Grass">Grass</option>
          <option value="Electric">Electric</option>
          <option value="Ice">Ice</option>
          <option value="Fighting">Fighting</option>
          <option value="Poison">Poison</option>
          <option value="Ground">Ground</option>
          <option value="Flying">Flying</option>
          <option value="Psychic">Psychic</option>
          <option value="Bug">Bug</option>
          <option value="Rock">Rock</option>
          <option value="Ghost">Ghost</option>
          <option value="Dragon">Dragon</option>
          <option value="Dark">Dark</option>
          <option value="Steel">Steel</option>
          <option value="Fairy">Fairy</option>
        </select>
      </div>

      {/* CP Filter */}
      <div className="section">
        <h4>Min CP</h4>
        <input
          type="range"
          min="0"
          max="5000"
          value={minCP}
          onChange={(e) => setMinCP(Number(e.target.value))}
        />
        <span>{minCP}+</span>
      </div>

      {/* Teams */}
      <div className="section">
        <h4>Teams</h4>
        <button>Team 1</button>
        <button>Team 2</button>
      </div>

      {/* Battle */}
      <div className="section">
        {/* <h4>Battle Mode</h4>
        <label>
          <input
            type="radio"
            checked={battleMode === "pve"}
            onChange={() => setBattleMode("pve")}
          />
          PvE
        </label>
        <label>
          <input
            type="radio"
            checked={battleMode === "pvp"}
            onChange={() => setBattleMode("pvp")}
          />
          PvP
        </label> */}

        {/* <button className="battle">Simulate Battle</button> */}
      </div>
    </aside>
  );
}
