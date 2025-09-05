"use client";

export default function BudgetAlert({ expense, limit }) {
  if (expense === 0) return null;

  const isOver = expense > limit;
  const isClose = expense > limit * 0.8 && !isOver;

  return (
    <div
      className={`p-2 mt-2 rounded text-white ${
        isOver ? "bg-red-600" : isClose ? "bg-yellow-500" : "bg-green-600"
      }`}
    >
      {isOver
        ? "Budget exceeded!"
        : isClose
        ? "Warning: You're close to your budget limit."
        : "You're within budget."}
    </div>
  );
}
