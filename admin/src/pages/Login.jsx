import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminContext";
import { ShieldAlert, Loader2 } from "lucide-react";
import logo from "../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const { login, isLoading } = useAdminAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const res = await login(email, password);
    if (res.success) {
      navigate("/");
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-emerald-100 to-green-200 relative font-serif overflow-hidden">
      <div className="relative z-10 bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-[90%] max-w-md border border-green-200 transition-all duration-500 hover:shadow-green-300/50">
        <div>
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Medicare Logo" className="w-28 h-28 object-contain drop-shadow-lg" />
          </div>
          <h2 className="text-3xl font-bold text-center text-emerald-700 tracking-wide mb-2">
            Admin Portal
          </h2>
          <p className="text-center text-green-600 mb-6 text-sm">
            Sign in with your admin credentials
          </p>
        </div>
        
        <form className="space-y-5" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50/90 border border-red-200 text-red-700 p-3 rounded-full text-sm text-center shadow-sm">
              {error}
            </div>
          )}
          
          <div>
            <input
              type="email"
              required
              className="w-full px-5 py-3 rounded-full border border-green-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-shadow"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              required
              className="w-full px-5 py-3 rounded-full border border-green-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-shadow"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-linear-to-r from-emerald-400 to-green-600 text-white font-semibold rounded-full hover:shadow-lg disabled:opacity-70 transition-all duration-300 flex justify-center items-center"
            >
              {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
