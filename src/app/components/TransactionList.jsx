"use client";

export default function TransactionList({ transactions }) {
  if (transactions.length === 0) {
    return <p className="mt-4 text-gray-500">No transactions yet.</p>;
  }

  return (
    <div className="mt-4">
      <h2 className="font-bold text-lg mb-2">All Transactions</h2>
      <ul className="space-y-2">
        {transactions.map((t) => (
          <li key={t.id} className="flex justify-between border p-2 rounded">
            <span>{t.category} ({t.type})</span>
            <span>${t.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
