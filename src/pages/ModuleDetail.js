import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { diplomas } from "../data";

function ModuleDetail() {
  const { diplomaId, moduleId } = useParams();
  const diploma = diplomas.find((d) => d.id === diplomaId);
  const module = diploma?.modules.find((m) => m.id === moduleId);
  const [favourite, setFavourite] = useState(false);

  if (!diploma || !module) return <p>Module not found.</p>;

  return (
    <section>
      <h2>{diploma.name}</h2>
      <h3>
        {module.name}{" "}
        <button
          type="button"
          className={favourite ? "fav-btn fav-btn--active" : "fav-btn"}
          onClick={() => setFavourite((prev) => !prev)}
        >
          {favourite ? "★ Saved" : "☆ Add to favourites"}
        </button>
      </h3>
      <p>{module.description}</p>

      <p>
        <Link
          to={`/register?diploma=${diploma.id}&module=${module.id}`}
          className="btn-primary"
        >
          Register interest
        </Link>
      </p>

      <p>
        <Link to={`/diplomas/${diploma.id}`} className="text-link">
          &larr; Back to modules
        </Link>
      </p>
    </section>
  );
}

export default ModuleDetail;