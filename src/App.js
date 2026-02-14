// import React from 'react';

import { useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import Filter from "./components/Filter";
// import './App.css';

function App() {
  // State to hold expenses
  const [expenses, setExpenses] = useState([]);

  // Predefined categories with icons
  const categories = [
    { name: "Food", icon: "🍔" },
    { name: "Travel", icon: "✈️" },
    { name: "Utility Bills", icon: "💡" },
    { name: "Shopping", icon: "🛍️" },
    { name: "Entertainment", icon: "🎬" },

    { name: "Health", icon: "💊" },
    { name: "Education", icon: "📚" },
    { name: "Groceries", icon: "🛒" },
    { name: "Savings", icon: "💰" },
    { name: "Income", icon: "💵" },
    { name: "Other", icon: "🔖" },
  ];

  // Function to add a new expense
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };
  
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8  items-center justify-between">
        <ExpenseSummary expenses={expenses} />

        <div className=" grid grid-cols-2 gap-10">
          
          <ExpenseForm
            onAddExpense={addExpense}
            categories={categories}
            className="p-10"
          />

          <Filter />
          
          <ExpenseList
            expenses={expenses}
            categories={categories}
            onEdit={addExpense}
            // onDelete={removeExpense}
          />
        </div>
      </main>
    </>
  );
}

export default App;
