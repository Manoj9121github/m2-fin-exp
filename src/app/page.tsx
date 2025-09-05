"use client";
import { useState, useMemo, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import SummaryCard from "./components/SummaryCard";
import BudgetAlert from "./components/BudgetAlert";
import TransactionChart from "./components/TransactionChart";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const budgetLimit = 1000;

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const totalExpense = useMemo(() => {
    return transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
  }, [transactions]);

  const totalIncome = useMemo(() => {
    return transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
  }, [transactions]);

  useEffect(() => {
    if (totalExpense > budgetLimit) {
      console.warn("Budget exceeded!");
    }
  }, [totalExpense, budgetLimit]);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Personal Finance Dashboard
        </h1>

        {/* Budget alert */}
        <BudgetAlert expense={totalExpense} limit={budgetLimit} />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SummaryCard income={totalIncome} expense={totalExpense} />
        </div>

        {/* Transaction Form */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Add Transaction
          </h2>
          <TransactionForm addTransaction={addTransaction} />
        </div>

        {/* Transaction List */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Transactions
          </h2>
          <TransactionList transactions={transactions} />
        </div>
        <div className="bg-white shadow rounded-lg w-100 mx-auto p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Transaction Chart
          </h2>
          <TransactionChart income={totalIncome} expense={totalExpense} />
        </div>
      </div>
    </main>
  );
}
