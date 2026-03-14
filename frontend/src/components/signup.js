import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  // Normal Signup
  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch("https://kavishita-elegance.onrender.com/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
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



  // Google Signup
  const handleGoogleSignup = async () => {

    try {

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      // send Google user to backend
      const res = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          password: "googleuser"
        })
      });

      const data = await res.json();

      localStorage.setItem("userInfo", JSON.stringify(data));

      navigate("/");

    } catch (error) {

      console.log(error);

    }

  };



  return (

    <div className="min-h-screen flex items-center justify-center bg-[#f9f6f2]">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-serif text-center mb-6 text-[#7a4a2e]">
          Sign Up
        </h2>


        <form onSubmit={handleSignup} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            Sign Up
          </button>

        </form>


        {/* Divider */}

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-sm text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>


        {/* Google Signup */}

        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-md hover:bg-gray-50"
        >
          Continue with Google
        </button>


        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#7a4a2e] cursor-pointer font-medium"
          >
            Login
          </span>
        </p>

      </div>

    </div>

  );

}

export default Signup;