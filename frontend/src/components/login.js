import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch("https://kavishita-elegance.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      if (res.ok) {

        localStorage.setItem("userInfo", JSON.stringify(data));

        navigate("/");

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f6f2]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-serif text-center mb-6 text-[#7a4a2e]">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email address"
            className="w-full border p-3 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-[#7a4a2e] text-white py-3 rounded-md">
            Login
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-[#7a4a2e] cursor-pointer font-medium"
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;