"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./signup.css";


export default function SignupPage() {

  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
  if (!email || !password || !name) {
    alert("All fields required");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  setLoading(true);

  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();
  setLoading(false);

  if (data.success) {
  router.push("/dashboard");
  } else {
    alert(data.error || "Signup failed");
  }
};

  return (
    <div className="signup-page">
      <div className="signup-card">

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

        {/* RIGHT PANEL */}
        <div className="signup-right">
          <h2>Create Account 🚀</h2>
          <p className="subtext">Join PokéDex Pro</p>

          <button className="social google">
            <img src="/icons8-google-48.png" />
            Sign up with Google
          </button>

          <div className="divider">or</div>

          <div className="input-group">
            <img src="/icons8-username-48.png" />
            <input
             type="text"
             placeholder="Full Name"
             value={name}
             onChange={(e) => setName(e.target.value)} 
             />
          </div>

          <div className="input-group">
            <img src="/icons8-email-48.png" />
            <input
             type="email" 
             placeholder="Email" 
             value={email}
             onChange={(e) => setEmail(e.target.value)} 
             />
          </div>

          <div className="input-group">
            <img src="/icons8-password-48.png" />
            <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <img src="/icons8-password-48.png" />
            <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className="signup-btn" onClick={handleSignup}>
            {loading ? "Creating..." : "Create Account"}
          </button>


          <p className="register">
            Already have an account? <a href="/auth/login">Login</a>
          </p>
        </div>

      </div>
    </div>
  );
}
