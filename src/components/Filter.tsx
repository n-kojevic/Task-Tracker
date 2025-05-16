// === INTERFACE: FILTER PROPS ===
// Props expected by the Filter component
interface FilterProps {
  setFilter: (filter: string) => void;   // Function to update the current filter
  currentFilter: string;                 // Currently selected filter
}

// === COMPONENT: FILTER ===
const Filter = ({ setFilter, currentFilter }: FilterProps) => {
  return (
    <div className="filter-buttons">
      {/* Button to show all tasks */}
      <button
        onClick={() => setFilter("all")}
        className={currentFilter === "all" ? "active" : ""}
      >
        All
      </button>

      {/* Button to show only completed tasks */}
      <button
        onClick={() => setFilter("completed")}
        className={currentFilter === "completed" ? "active" : ""}
      >
        Completed
      </button>

      {/* Button to show only pending (not completed) tasks */}
      <button
        onClick={() => setFilter("pending")}
        className={currentFilter === "pending" ? "active" : ""}
      >
        Pending
      </button>
    </div>
  );
}

export default Filter;
