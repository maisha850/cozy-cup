"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";


export default function LoginPage() {
const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if(email == 'cozycup@gmail.com' && password == '123456'){
     document.cookie = "auth=true; path=/; max-age=86400";

        router.push('/menu')
        toast.success('log In successful')
    }
    else{
        setError("Invalid email or password")
        toast.error(error.message)
    }
  };

  return (
    <div className="min-h-screen relative  flex items-center justify-center">
      <form onSubmit={handleLogin} className="w-96 p-6  shadow-lg rounded-lg">
        

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="input mb-3 w-full"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input mb-4 w-full"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-primary w-full">Login</button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
}
