// import React from 'react';
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import Filter from "./components/Filter";
import ChartSection from "./components/ChartSection";
import AddExpense from "./components/AddExpense";
import { Toaster } from "react-hot-toast";

import "./App.css";

function App() {
  // State to hold expenses
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) {
      return JSON.parse(saved);
    } else {
      return [];
    }
  });

  // Predefined categories with icons
  const categories = [
    { name: "Food", icon: "🍔" },
    { name: "Travel", icon: "✈️" },
    { name: "Bills", icon: "💡" },
    // { name: "Shopping", icon: "🛍️" },
    { name: "Entertainment", icon: "🎬" },

    { name: "Health", icon: "💊" },
    { name: "Education", icon: "📚" },
    { name: "Groceries", icon: "🛒" },
    { name: "Savings", icon: "💰" },
    { name: "Income", icon: "💵" },
    { name: "Other", icon: "🔖" },
  ];

  const defaultFilters = {
    category: "",
    sort: "newestfirst",
    fromDate: "",
    toDate: "",
    minAmount: "",
    maxAmount: "",
  };

  const [filters, setFilters] = useState(() => {
    const saved = sessionStorage.getItem("filters");
    return saved ? JSON.parse(saved) : defaultFilters;
  });

  // Persist expenses to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Persist filters to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  // Function to add a new expense
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const removeExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const handleFilterChange = (name, value) => {
    if (name === "reset") {
      setFilters(defaultFilters);
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
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
      <div className="min-h-screen  bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#6d28d9]">
        <Header />
        <Toaster
          position="top-right"
          containerStyle={{ marginTop: "60px" }}
          // reverseOrder={false}
        />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <ExpenseSummary expenses={filteredExpenses} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            <div className="flex flex-col gap-6">
              <AddExpense onAddExpense={addExpense} categories={categories} />

              <ChartSection expenses={filteredExpenses} />
            </div>

            <div className="flex flex-col gap-6">
              <Filter
                filters={filters}
                defaultFilters={defaultFilters}
                onFilterChange={handleFilterChange}
              />

              <ExpenseList
                expenses={filteredExpenses}
                categories={categories}
                // onEdit={addExpense}
                onDelete={removeExpense}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
