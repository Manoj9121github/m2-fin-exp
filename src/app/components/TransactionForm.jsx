"use client";
import { useState } from "react";

export default function   ({ addTransaction }) {
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) return;

    const newTransaction = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString(),
    };
    addTransaction(newTransaction);

    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4 border rounded-lg mt-4">
      <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2 rounded">
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Transaction</button>
    </form>
  );
}
