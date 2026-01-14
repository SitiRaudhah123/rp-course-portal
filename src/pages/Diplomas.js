import { useState } from "react";
import { Link } from "react-router-dom";
import { diplomas } from "../data";

function Diplomas() {
  const [query, setQuery] = useState("");

  const filteredDiplomas = diplomas.filter((d) => {
    const q = query.toLowerCase();
    return (
      d.name.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q)
    );
  });

  return (
    <section>
      <h2>School of Infocomm Diplomas</h2>

      <div className="search-row">
        <input
          type="text"
          placeholder="Search diplomas by name or keywords..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <ul className="diploma-list">
        {filteredDiplomas.map((diploma) => (
          <li key={diploma.id} className="diploma-card">
            <h3>{diploma.name}</h3>
            <p>{diploma.description}</p>
            <Link to={`/diplomas/${diploma.id}`} className="btn-link">
              View Modules
            </Link>
          </li>
        ))}
      </ul>

      {filteredDiplomas.length === 0 && query && (
        <p>No diplomas match “{query}”. Try another keyword.</p>
      )}
    </section>
  );
}

export default Diplomas;