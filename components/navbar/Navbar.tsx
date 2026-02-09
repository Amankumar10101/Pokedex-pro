"use client";

import Link from "next/link";
import { useState } from "react";
import { Bell } from "lucide-react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">
        <Link href="/dashboard" className="logo">
          PokéDex <span>Pro</span>
        </Link>
      </div>

      {/* Center */}
      <div className="nav-center">
        <Link href="/pokemon">Pokémon</Link>
        <Link href="/teams">Teams</Link>
        <Link href="/raids">Raids</Link>
        <Link href="/battles">Battles</Link>
        <Link href="/analytics">Analytics</Link>
      </div>

      {/* Right */}
      <div className="nav-right">
        <Bell className="bell" />

        <div className="user-box" onClick={() => setOpen(!open)}>
          <img src="/icons8-profile-100.png" className="avatar" />

          {open && (
            <div className="dropdown">
              <Link href="/profile">Profile</Link>
              <Link href="/settings">Settings</Link>
              <hr />
              <Link href="/logout">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
