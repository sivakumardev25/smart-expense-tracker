// import React from 'react';
import { useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import Filter from "./components/Filter";
import ChartSection from "./components/ChartSection";
// import PieChart from './PieChart';
// import BarChart from './BarChart';
// import './App.css';

function App() {
  // State to hold expenses
  const [expenses, setExpenses] = useState([]);

  // Predefined categories with icons
  const categories = [
    { name: "Food", icon: "🍔" },
    { name: "Travel", icon: "✈️" },
    { name: "Utility Bills", icon: "💡" },
    // { name: "Shopping", icon: "🛍️" },
    { name: "Entertainment", icon: "🎬" },

    { name: "Health", icon: "💊" },
    { name: "Education", icon: "📚" },
    { name: "Groceries", icon: "🛒" },
    { name: "Savings", icon: "💰" },
    { name: "Income", icon: "💵" },
    { name: "Other", icon: "🔖" },
  ];

  const [filters, setFilters] = useState({
    category: "",
    sort: "newestfirst",
    fromDate: "",
    toDate: "",
    minAmount: "",
    maxAmount: "",
  });

  // Function to add a new expense
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const removeExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredExpenses = expenses
    .filter((exp) => {
      if (filters.category && exp.category !== filters.category) return false;
      if (filters.fromDate && new Date(exp.date) < new Date(filters.fromDate))
        return false;
      if (filters.toDate && new Date(exp.date) > new Date(filters.toDate))
        return false;
      if (filters.minAmount && exp.amount < Number(filters.minAmount))
        return false;
      if (filters.maxAmount && exp.amount > Number(filters.maxAmount))
        return false;
      return true;
    })
    .sort((a, b) => {
      if (filters.sort === "newestfirst")
        return new Date(b.date) - new Date(a.date);
      if (filters.sort === "oldestfirst")
        return new Date(a.date) - new Date(b.date);
      if (filters.sort === "highestamount") return b.amount - a.amount;
      if (filters.sort === "lowestamount") return a.amount - b.amount;
      return 0;
    });

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 items-center justify-between">
        <ExpenseSummary expenses={filteredExpenses} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <ExpenseForm
            onAddExpense={addExpense}
            categories={categories}
            className="p-10"
          />

          <Filter filters={filters}
            classNameonFilterChange={handleFilterChange} />

          <ChartSection />
          <ExpenseList
            expenses={filteredExpenses}
            categories={categories}
            // onEdit={addExpense}
            onDelete={removeExpense}
          />
        </div>
      </main>
    </>
  );
}

export default App;
