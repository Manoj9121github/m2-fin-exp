"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPage() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };

    // Save to localStorage
    const saved = localStorage.getItem("transactions");
    const existing = saved ? JSON.parse(saved) : [];
    localStorage.setItem(
      "transactions",
      JSON.stringify([...existing, newTransaction])
    );

    router.push("/"); // Redirect back to dashboard
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">➕ Add Transaction</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter description"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Add
        </button>
      </form>
    </div>
  );
}
