import { useState, useEffect } from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

function ChartSection({ expenses }) {
  const [chartType, setChartType] = useState("pie"); // 'pie' or 'bar'

  const [expenseData, setExpenseData] = useState({
    labels: [],
    values: [],
  });

  const categoryIcons = {
    Food: "🍔",
    Travel: "✈️",
    Bills: "💡",
    Entertainment: "🎬",
    Health: "💊",
    Education: "📚",
    Groceries: "🛒",
    Savings: "💰",
    Income: "💵",
    Other: "🔖",
  };

  // Convert expenses ->  grouped chart data dynamically
  useEffect(() => {
    console.log("Expenses coming:", expenses);

    if (!expenses || expenses.length === 0) {
      setExpenseData({ labels: [], values: [] });

      return;
    }

    const grouped = {};

    expenses.forEach((exp) => {
      const category = exp.category || "Other";
      const amount = Number(exp.amount) || 0;
      grouped[category] = (grouped[category] || 0) + amount;
    });

    setExpenseData({
      labels: Object.keys(grouped),
      values: Object.values(grouped),
    });
  }, [expenses]);

  const total = expenseData.values.reduce((a, b) => a + b, 0);

  return (
    <div className="border bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-bold">Expense Charts</h2>

        {/* <div className="flex items-center justify-center h-full border border-gray-300 rounded-lg px-3 py-1"> */}

        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            type="button"
            // className="text-gray-500 text-sm font-semibold border border-gray-300 rounded-full px-3 py-1 mr-2"
            onClick={() => setChartType("pie")}
            className={`px-3 py-1 text-sm rounded-md font-semibold transition ${
              chartType === "pie"
                ? "bg-blue-500 text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            Pie
          </button>

          <button
            // className="text-gray-500 text-sm font-semibold border border-gray-300 rounded-full px-3 py-1">
            type="button"
            onClick={() => setChartType("bar")}
            className={`px-3 py-1 text-sm rounded-md  font-semibold transition  ${
              chartType === "bar"
                ? "bg-blue-500 text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            Bar
          </button>
        </div>
      </div>

      {/*  Empty state */}
      {expenseData.labels.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-gray-400">
          <p className="text-gray-400 text-center mt-20 font-semibold">
            No expense data yet 📭
          </p>
          <p className="text-sm">Add expenses to see charts</p>
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          {/*  Dynamic chart switch */}
          {chartType === "pie" ? (
            <PieChart data={expenseData} />
          ) : (
            <BarChart data={expenseData} />
          )}

          {/* Category List */}
          <div className="mt-2 space-y-2">
            {expenseData.labels.map((label, i) => {
              const value = expenseData.values[i];
              const percent = ((value / total) * 100).toFixed(1);

              return (
                <div
                  key={label}
                  className="flex justify-between items-center bg-gray-100 rounded-lg px-3 py-2"
                >
                  <span className=" font-bold text-sm">
                    <span className="mr-1">{categoryIcons[label] || "🔖"}</span>
                    {label}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="font-bold text-sm">
                      ₹{value.toLocaleString()}
                    </span>

                    <span className="text-xs bg-gray-200 text-gray-500 font-semibold px-2 py-1 rounded-full">
                      {percent}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total */}

          <div className="mt-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white p-3 rounded-lg font-semibold flex justify-between items-center">
            <span className="font-bold">Total Expenses:</span>
            <span className="text-xl font-bold">₹{total.toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChartSection;
