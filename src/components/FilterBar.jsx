function FilterBar({ setFilter, setSortType }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-4">
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("All")}
          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          All
        </button>

        <button
          onClick={() => setFilter("Completed")}
          className="px-3 py-1 bg-green-200 rounded-lg hover:bg-green-300"
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("Pending")}
          className="px-3 py-1 bg-yellow-200 rounded-lg hover:bg-yellow-300"
        >
          Pending
        </button>

        <button
          onClick={() => setFilter("High")}
          className="px-3 py-1 bg-red-200 rounded-lg hover:bg-red-300"
        >
          High
        </button>

        <button
          onClick={() => setFilter("Medium")}
          className="px-3 py-1 bg-orange-200 rounded-lg hover:bg-orange-300"
        >
          Medium
        </button>

        <button
          onClick={() => setFilter("Low")}
          className="px-3 py-1 bg-green-200 rounded-lg hover:bg-green-300"
        >
          Low
        </button>
      </div>

      {/* Sorting Dropdown */}
      <select
        onChange={(e) => setSortType(e.target.value)}
        className="border p-2 rounded-lg md:ml-auto"
      >
        <option value="date">Sort by Date</option>
        <option value="priority">Sort by Priority</option>
        <option value="status">Sort by Status</option>
      </select>
    </div>
  );
}

export default FilterBar;