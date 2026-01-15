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
    <div className=" py-16 relative min-w-screen min-h-screen flex items-center justify-center md:px-20 px-6 ">


     <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1709486688594-438596b68fc8?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
 <div className="relative z-10 ">
  <form onSubmit={handleLogin} className="w-96 p-6  bg-white/20 shadow-lg rounded-lg">
        

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
 </div>
    
      <ToastContainer></ToastContainer>
    </div>
  );
}
