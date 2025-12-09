import { useState, useRef } from "react";

function TechnologySearch({ onSearch }) {
  const [query, setQuery] = useState("");
  const debounceRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      onSearch(value);
    }, 400);
  };

  return (
    <div className="tech-search-box">
      <input
        type="text"
        className="tech-search-input"
        placeholder="Поиск технологий..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default TechnologySearch;