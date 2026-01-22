import "./../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          PokéDex<span>  Pro</span>
        </div>

        <ul className="nav-links">
          <li>Tour</li>
          
          <li>Seasons</li>
          <li>Events</li>
          <li>Community</li>
          
         
        </ul>

        <button className="sign-in">Log In</button>
        <button className="sign-in">Sign Up</button>
      </div>
    </nav>
  );
}
