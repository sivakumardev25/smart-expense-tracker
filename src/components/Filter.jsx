function Filter({ filters, defaultFilters, onFilterChange }) {
  const isFilterChanged =
    filters.category !== defaultFilters.category ||
    filters.sort !== defaultFilters.sort ||
    filters.fromDate !== defaultFilters.fromDate ||
    filters.toDate !== defaultFilters.toDate ||
    filters.minAmount !== defaultFilters.minAmount ||
    filters.maxAmount !== defaultFilters.maxAmount;

  return (
    //   Filter and sort section with white background, rounded corners, and shadow
    <div className=" max-w-2xl bg-white rounded-xl border-2 p-6 shadow-md transition-all duration-300">
      {/* Filter and sort header */}
      <h2 className="text-2xl font-bold mb-4">Filters & Sort</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 flex-grow">
        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-bold text-gray-500"
          >
            Category:
          </label>
          <select
            id="category"
            value={filters.category}
            className="w-full h-12 border rounded-md border-gray-200 p-2"
            onChange={(e) => onFilterChange("category", e.target.value)}
          >
            <option value="">All</option>
            <option value="Food">🍔 Food</option>
            <option value="Travel">✈️ Travel</option>
            <option value="Bills">💡 Bills</option>
            {/* <option value="Shopping">🛍️ Shopping</option> */}
            <option value="Entertainment">🎬 Entertainment</option>
            <option value="Health">💊 Health</option>
            <option value="Education">📚 Education</option>
            <option value="Groceries">🛒 Groceries</option>
            <option value="Savings">💰 Savings</option>
            <option value="Income">💵 Income</option>
            <option value="Other">🔖 Other</option>
          </select>
        </div>
        {/* sort */}
        <div>
          <label
            htmlFor="sort"
            className="mb-2 block text-sm font-bold text-gray-500"
          >
            Sort By:
          </label>
          <select
            id="sort"
            value={filters.sort}
            className="w-full h-12 border rounded-md border-gray-200 p-2"
            onChange={(e) => onFilterChange("sort", e.target.value)}
          >
            <option value="newestfirst">Newest First</option>
            <option value="oldestfirst">Oldest First</option>
            <option value="highestamount">Highest Amount</option>
            <option value="lowestamount">Lowest Amount</option>
          </select>
        </div>
        {/* Date range filter */}
        <div>
          <label
            htmlFor="fromDate"
            className="mb-2 block text-sm font-bold text-gray-500 "
          >
            From Date:
          </label>
          <input
            type="date"
            id="fromDate"
            value={filters.fromDate}
            className="w-full h-12 border rounded-md border-gray-200 p-2"
            onChange={(e) => onFilterChange("fromDate", e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="toDate"
            className="mb-2 block text-sm font-bold text-gray-500"
          >
            To Date:
          </label>
          <input
            type="date"
            id="toDate"
            value={filters.toDate}
            className="w-full h-12 border rounded-md border-gray-200 p-2"
            onChange={(e) => onFilterChange("toDate", e.target.value)}
          />
        </div>
        {/* Amount range filter */}
        <div>
          <label
            htmlFor="minAmount"
            className="mb-2 block text-sm font-bold text-gray-500"
          >
            Min Amount (₹):
          </label>
          <input
            type="number"
            id="minAmount"
            placeholder="0.00"
            value={filters.minAmount}
            className="w-full h-12 border rounded-md border-gray-200 p-2"
            onChange={(e) => onFilterChange("minAmount", e.target.value)}
          />
        </div>
        {/* Amount range filter */}
        <div>
          <label
            htmlFor="maxAmount"
            className="mb-2 block text-sm font-bold text-gray-500"
          >
            Max Amount (₹):
          </label>
          <input
            type="number"
            id="maxAmount"
            placeholder="0.00"
            value={filters.maxAmount}
            className="w-full h-12 border rounded-md border-gray-200 p-2"
            onChange={(e) => onFilterChange("maxAmount", e.target.value)}
          />
        </div>
      </div>

      {isFilterChanged && (
        <button
          type="button"
          className="flex flex-cols-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => onFilterChange("reset", defaultFilters)}
        >
          Reset Filters
        </button>
      )}
    </div>
  );
}

export default Filter;
