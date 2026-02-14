function Filter({ filter, onFilterChange }) {
  return (
    //   Filter and sort section with white background, rounded corners, and shadow
    <div className=" max-w-2xl text-items border-white bg-white rounded-xl p-4 shadow-md">
      {/* Filter and sort header */}
      <h2 className="text-2xl font-semibold">Filters & Sort</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="filter" className="mb-2">
            Category:
          </label>{" "}
          <select
            id="filter"
            value={filter}
            className="border rounded-md border-gray-400"
            onChange={(e) => onFilterChange(e.target.value)}
          >
            {" "}
            <option value="">All</option>
            <option value="Food">Food</option>{" "}
            <option value="travel">Travel</option>{" "}
            <option value="bills">Bills</option>{" "}
            <option value="Entertainment">Entertainment</option>{" "}
            <option value="Health">Health</option>{" "}
            <option value="Education">Education</option>{" "}
            <option value="Groceries">Groceries</option>{" "}
            <option value="Savings">Savings</option>{" "}
            <option value="Other">Other</option>{" "}
          </select>{" "}
        </div>
        {/* sort */}
        <div>
          <label htmlFor="sort">Sort By:</label>{" "}
          <select
            id="sort"
            className="border rounded-md border-gray-400"
            onChange={(e) => onFilterChange(e.target.value)}
          >
            <option value="newestfirst">Newest First</option>
            <option value="oldestfirst">Oldest First</option>
            <option value="amount">Amount</option>
          </select>{" "}
        </div>{" "}
        <div>
          <label htmlFor="search">From Date: </label>{" "}
          <input
            type="date"
            id="search"
            className="border rounded-md border-gray-400"
            onChange={(e) => onFilterChange(e.target.value)}
          />{" "}
        </div>
        <div>
          <label htmlFor="search">To Date: </label>{" "}
          <input
            type="date"
            id="search"
            className="border rounded-md border-gray-400"
            onChange={(e) => onFilterChange(e.target.value)}
          />{" "}
        </div>
        <div>
          <label htmlFor="search">Min Amount ($): </label>{" "}
          <input
            type="number"
            id="search"
            className="border rounded-md border-gray-400"
            onChange={(e) => onFilterChange(e.target.value)}
          />{" "}
        </div>
        <div>
          {" "}
          <label htmlFor="search">Max Amount ($): </label>{" "}
          <input
            type="number"
            id="search"
            className="border rounded-md border-gray-400"
            onChange={(e) => onFilterChange(e.target.value)}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default Filter;
