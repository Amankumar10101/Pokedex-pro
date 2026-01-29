import "@/styles/login.css";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">

        {/* LEFT PANEL */}
        <div className="login-left">

          {/* Pokémon Particles */}
          <div className="particles">
            <span className="poke p1"></span>
            <span className="poke p2"></span>
            <span className="poke p3"></span>
            <span className="poke p4"></span>
            <span className="poke p5"></span>
          </div>

          <h2>Pokédex Pro</h2>
          <p>Build. Analyze. Win every battle.</p>

          <div className="phone-mockup">
            <Image src="/phone.png" alt="App" width={300} height={600} />
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="login-right">
          <h1>Welcome Trainer 👋</h1>
          <p>Log in to your Pokédex</p>

          <button className="social">Login with Google</button>
          <button className="social">Login with Facebook</button>

          <div className="divider">or</div>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <div className="row">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <span>Forgot?</span>
          </div>

          <button className="login-btn">Login</button>

          <p className="register">
            Don’t have an account? <span>Sign Up</span>
          </p>
        </div>

      </div>
    </div>
  );
}
