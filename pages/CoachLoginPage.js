import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Import auth from firebase.js
import { useRouter } from "next/router";

const CoachLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      router.push("/CoachMembersPage"); // Redirect after login
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen px-4"
      style={{
        backgroundImage: "url('/pic3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-90"></div>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg relative z-10">
        <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">Coach Login</h2>
        <p className="font-bold text-yellow-600 mb-6 text-center">
          Welcome, Coach! Enter your details to access new Membership Application Forms.
        </p>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border-2 border-green-900 focus:outline-none focus:border-yellow-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border-2 border-green-900 focus:outline-none focus:border-yellow-600"
            required
          />
          <button
            type="submit"
            className="w-full font-semibold p-3 bg-green-900 text-yellow-600 border-2 border-yellow-600 hover:bg-yellow-600 hover:text-green-900 hover:border-green-900 transition-all duration-300"
          >
            LOGIN
          </button>
        </form>
      </div>
    </section>
  );
};

export default CoachLoginPage;
