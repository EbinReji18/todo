import PropTypes from "prop-types";

export default function Filter({ filter, setFilter }) {
  return (
    <div className="filter">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={filter === "active" ? "active" : ""}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
