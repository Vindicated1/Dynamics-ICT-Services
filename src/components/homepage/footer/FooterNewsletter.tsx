"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // TODO: Integrate with your newsletter service
    console.log("Newsletter:", email);

    setEmail("");
  }

  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-white">
        Newsletter
      </h3>

      <p className="mb-6 leading-7 text-slate-400">
        Subscribe to receive ICT insights, technology trends and company
        updates.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex overflow-hidden rounded-xl border border-slate-700"
      >
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent px-4 py-4 text-white outline-none placeholder:text-slate-500"
        />

        <button
          type="submit"
          className="bg-blue-600 px-6 transition hover:bg-blue-700"
        >
          <Send size={20} className="text-white" />
        </button>
      </form>
    </div>
  );
}