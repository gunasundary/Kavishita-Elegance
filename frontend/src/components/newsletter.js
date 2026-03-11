import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    console.log("Subscribed email:", email);

    // later you can send this to backend
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div className="bg-[#f9f6f2] py-16 text-center">
      <h1 className="text-3xl font-serif text-[#7a4a2e] mb-4">
        Join our Newsletter
      </h1>

      <p className="text-gray-600 mb-6">
        Signup for our email newsletter to get exclusive discounts, updates,
        and more.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="flex justify-center items-center gap-3"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="border p-3 rounded-md w-72"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-[#7a4a2e] text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-[#623823]"
        >
          Subscribe →
        </button>
      </form>
    </div>
  );
}

export default Newsletter;