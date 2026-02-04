import Link from "next/link";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        PokéDex Pro
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li><Link href="#">Tour</Link></li>
        <li><Link href="#">Seasons</Link></li>
        <li><Link href="#">Events</Link></li>
        <li><Link href="#">Community</Link></li>
      </ul>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <Link href="/auth/login" className="login-btn">
          Log In
        </Link>

        <Link href="/auth/signup" className="signup-btn">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
