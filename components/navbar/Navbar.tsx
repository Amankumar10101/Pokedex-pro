"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Bell, User, LogOut, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasToken = document.cookie.includes("token=");
    setIsLoggedIn(hasToken);
  }, []);

  const logoLink = isLoggedIn ? "/dashboard" : "/";

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/auth/login");
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <Link href={logoLink} className="logo">
        PokéDex Pro
      </Link>

      {/* CENTER */}
      {isLoggedIn && (
        <div className="nav-links">
          <Link href="/dashboard/Pokemon">Pokémon</Link>
          <Link href="/dashboard/battles">Battles</Link>
          <Link href="/dashboard/teams">Teams</Link>
          <Link href="/dashboard/raids">Raids</Link>
          <Link href="/dashboard/analytics">Analytics</Link>
        </div>
      )}

      {/* RIGHT */}
      {isLoggedIn && (
        <div className="nav-right">
          {/* Bell */}
          <button className="icon-btn">
            <Bell size={20} />
          </button>

          {/* User */}
          <div className="user-menu">
            <button className="avatar" onClick={() => setOpen(!open)}>
              <User size={18} />
            </button>

            {open && (
              <div className="dropdown">
                <Link href="/dashboard/profile">
                  <User size={16} /> Profile
                </Link>
                <Link href="/dashboard/settings">
                  <Settings size={16} /> Settings
                </Link>
                <button onClick={logout}>
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
