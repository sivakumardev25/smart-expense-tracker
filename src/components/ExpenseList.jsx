function ExpenseList({ expenses, categories, onEdit, onDelete }) {
  return (
    <div className="border bg-white rounded-lg shadow-md p-4 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Expenses List</h2>
      <div>
        {expenses.length === 0 ? (
          // Display message when there are no expenses added yet
          <p className="text-gray-500 text-center align-center justify-center text-lg font-semibold">
            No expenses added yet.
          </p>
        ) : (
          expenses.map((exp) => {
            const categoryObj = categories.find(
              (cat) => cat.name === exp.category,
            );

            // Render each expense item with category icon, name, date, amount, and action buttons
            return (
              <div
                key={exp.id}
                className="flex justify-between border-gray-200 bg-gray-50 rounded-lg p-4 items-center mb-2 flex-grow w-full"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                    <span className="text-xl">
                      {categoryObj ? categoryObj.icon : "🔖"}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold">{exp.category}</div>
                    <p className="text-xs text-gray-500">{exp.note}</p>
                    <div className="text-sm text-gray-500">{exp.date}</div>
                  </div>
                </div>
                <div className="flex">
                  <h3 className="text-lg font-bold mr-4 text-blue-600 justify-center">
                    ₹{exp.amount.toFixed(2)}
                  </h3>
                  {/* <button
                  type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => onEdit(exp)}
                  >
                    Edit
                  </button> */}
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => onDelete(exp.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ExpenseList;
