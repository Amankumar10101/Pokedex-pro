"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";
import Link from "next/link";



export default function LoginPage() {
   const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
  router.push("/dashboard");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* LEFT PANEL */}
        <div className="signup-left">
          <h1>PokéDex Pro</h1>
          <p>Start your Pokémon journey today</p>

          <div className="phone-wrapper">
            <img src="/phone.png" className="phone-main" />
            <img src="/phone2.png" className="phone-back" />
          </div>

          <div className="store-buttons">
            <img src="/googleplay.png" />
            <img src="/appstore.png" />
          </div>
        </div>
        {/* <div className="phone-showcase">
  <div className="phone-back">
    <img src="/phone1.png" alt="Phone Back" />
  </div>

  <div className="phone-front">
    <img src="/phone1.png" alt="Phone Front" />
  </div>

  <div className="glow-circle"></div>
</div> */}



        {/* RIGHT PANEL */}
        <div className="login-right">
          <h2>Welcome Trainer 👋</h2>
          <p className="subtext">Log in to your Pokédex</p>

          <button className="social google">
            <img src="/icons8-google-48.png" alt="Google" />
            Login with Google
            </button>
          {/* <button className="social facebook">
            <img src="/icons8-facebook-50.png" alt="facebook" />
            Login with Facebook
            </button> */}

          <div className="divider">or</div>

          <div className="input-group">
            <img src="/icons8-email-48.png" className="input-icon" />
            <input 
              type="email" 
              placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <img src="/icons8-password-48.png" className="input-icon" />
            <input 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>


          <div className="options">
            <label><input type="checkbox" /> Remember me</label>
            <span>Forgot Your Password?</span>
          </div>

          <button className="login-btn" onClick={handleLogin} disabled={loading}>
         {loading ? "Logging in..." : "Login"}
            </button>

          <p className="register">
            Don’t have an account? <a href="/auth/signup"> Sign Up</a>
            {/* <Link href="/auth/signup">         
           <span> Sign up</span>
            </Link> */}
          </p>
        </div>

      </div>
    </div>
  );
}
