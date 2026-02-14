
// Summary card icons
import { GiWallet } from "react-icons/gi";
import { IoIosWallet } from "react-icons/io";
import { MdOutlineSavings } from "react-icons/md";
import { IoWallet } from "react-icons/io5";

// Summary card component to display balance, income, expense, and savings
function ExpenseSummary({ expenses }) {

  // Calculate total income and total expenses from the expenses array
  const income = expenses
    .filter((e) => e.category === "Income")
    .reduce((total, e) => total + e.amount, 0);

  const totalExpense = expenses
    .filter((e) => e.category !== "Income")
    .reduce((total, e) => total + e.amount, 0);

  // Calculate balance and savings
  const balance = income - totalExpense;
  const savings = balance > 0 ? balance : 0;

  // Define summary cards with icons, titles, values, and styles
  const cards = [
    {
      icon: <IoIosWallet />,
      title: "Balance",
      value: balance,
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    {
      icon: <GiWallet />,
      title: "Income",
      value: income,
      bg: "bg-green-100",
      text: "text-green-600",
    },
    {
      icon: <IoWallet />,
      title: "Expense",
      value: totalExpense,
      bg: "bg-red-100",
      text: "text-red-600",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Savings",
      value: savings,
      bg: "bg-yellow-100",
      text: "text-yellow-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-6">
      {cards.map((item, index) => (
        <div
          className={`p-4 rounded-xl shadow-md ${item.bg} hover:shadow-lg flex items-center gap-4 transition-shadow duration-300`}
          key={index}
        >
          <span className="text-4xl text-gray-800 ">{item.icon}</span>
          <div>
            <p className="text-black font-serif text-md"> {item.title}</p>
            <h2 className={`${item.text} text-3xl font-bold mt-2`}>
              $ {item.value.toLocaleString()}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpenseSummary;
