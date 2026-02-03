import "./signup.css";

// await fetch("http://localhost:5000/api/auth/signup", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ name, email, password })
// });


export default function SignupPage() {
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
            <input type="text" placeholder="Full Name" />
          </div>

          <div className="input-group">
            <img src="/icons8-email-48.png" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group">
            <img src="/icons8-password-48.png" />
            <input type="password" placeholder="Password" />
          </div>

          <div className="input-group">
            <img src="/icons8-password-48.png" />
            <input type="password" placeholder="Confirm Password" />
          </div>

          <button className="signup-btn">Create Account</button>

          <p className="register">
            Already have an account? <a href="/auth/login">Login</a>
          </p>
        </div>

      </div>
    </div>
  );
}
