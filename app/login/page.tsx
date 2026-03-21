"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Konto skapat! Kolla din e-post.");
    window.location.href = "/login";
  };

  return (
    <main className="min-h-screen bg-white px-6 py-20 text-gray-900">
      <div className="mx-auto max-w-md rounded-3xl border border-gray-200 p-8 shadow-sm">
        <h1 className="text-4xl font-bold">Skapa konto</h1>
        <p className="mt-4 text-gray-600">
          Registrera dig för att kunna lägga upp bostäder och hantera din profil.
        </p>

        <div className="mt-8 grid gap-4">
          <input
            type="email"
            placeholder="E-post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none"
          />

          <button
            onClick={handleRegister}
            className="rounded-2xl bg-black px-6 py-3 text-white hover:opacity-90"
          >
            Skapa konto
          </button>
        </div>
      </div>
    </main>
  );
}