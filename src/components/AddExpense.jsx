import { useState } from "react";
import toast from "react-hot-toast";

function AddExpense({ onAddExpense, categories }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields    if (!amount || amount <= 0) {
    if (!amount || amount <= 0) {
      toast.error("Enter valid amount");
      return;
    }
    if (!category) {
      toast.error("Please select a category");
      return;
    }

    // Handle form submission logic here
    // const data = { amount, date, category, note };
    // console.log("Expense Added:", data);

    // Create a new expense object with a unique ID and the form data
    const newExpense = {
      id: Date.now(), // Unique ID for the expense
      amount: Number(amount),
      date,
      category,
      note,
      type: category === "Income" ? "income" : "expense",
    };

    onAddExpense(newExpense);

    //  Show toast here after successful addition of expense
    toast.success("Expense Added Successfully!");

    // Reset form fields after submission
    setAmount("");
    setDate("");
    setCategory("");
    setNote("");
  };

  return (
    <div className="max-w-2xl bg-white rounded-xl border-2 p-6 shadow-md ">
      {/* Form header */}
      <h2 className="text-2xl font-bold mb-4"> Add New Expense</h2>
      {/* Form action */}
      <form onSubmit={handleSubmit}>
        {/* Ampunt + Date */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-2"></div> */}
          <div>
            <label className="text-sm font-bold text-gray-500">
              Amount (₹)<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              value={amount}
              className="w-full border rounded-lg p-2 mt-1"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="font-sm font-bold text-gray-500">
              Date <span className="text-red-500 text-lg">*</span>
            </label>
            <input
              type="date"
              value={date}
              className="w-full border rounded-lg p-2 mt-1"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="text-sm font-bold text-gray-500">
            Category<span className="text-red-500 text-lg">*</span>
          </label>
          {/* Category card */}
          <div className="grid grid-cols-5 gap-3 mt-2">
            {categories.map((cat) => (
              <div
                key={cat.name}
                onClick={() => setCategory(cat.name)}
                className={`cursor-pointer border rounded-xl py-2 text-center transition ${category === cat.name ? "bg-blue-100 border-blue-500 border-2 text-blue-700 font-semibold" : "bg-white hover:bg-gray-200"} `}
              >
                <div className="text-xl mb-2">{cat.icon}</div>
                <div className="text-sm">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mb-4">
          <label className="text-sm  font-bold text-gray-500">
            Note (optional)
          </label>
          <input
            type="text"
            placeholder="Add a note..."
            value={note}
            className="w-full border rounded-lg p-2 mt-1"
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <button
          type="submit"
          // disabled={!amount || !date || !category} // Disable button if required fields are not filled
          className=" w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          + Add Expense
        </button>
      </form>
    </div>
  );
}

export default AddExpense;
