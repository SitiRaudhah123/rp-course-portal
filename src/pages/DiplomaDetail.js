import { useParams, Link } from "react-router-dom";
import { diplomas } from "../data";

function DiplomaDetail() {
  const { diplomaId } = useParams();
  const diploma = diplomas.find((d) => d.id === diplomaId);

  if (!diploma) return <p>Diploma not found.</p>;

  return (
    <section>
      <h2>{diploma.name}</h2>
      <p>{diploma.description}</p>

      <h3>Modules</h3>
      <ul className="module-list">
        {diploma.modules.map((module) => (
          <li key={module.id} className="module-card">
            <h4>{module.name}</h4>
            <p>{module.description}</p>
            <Link
              to={`/diplomas/${diploma.id}/${module.id}`}
              className="btn-link"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>

      <p>
        <Link to="/diplomas" className="text-link">
          &larr; Back to all diplomas
        </Link>
      </p>
    </section>
  );
}

export default DiplomaDetail;