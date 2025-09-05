"use client";
import React from "react";

function SummaryCard({ income, expense }) {
  return (
    <div className="flex justify-around bg-gray-100 p-4 rounded-lg mt-4">
      <div>
        <h3 className="font-semibold">Income</h3>
        <p className="text-green-600">${income.toFixed(2)}</p>
      </div>
      <div>
        <h3 className="font-semibold">Expenses</h3>
        <p className="text-red-600">${expense.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default React.memo(SummaryCard);
