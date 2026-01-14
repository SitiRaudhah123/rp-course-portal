import { useParams, Link } from 'react-router-dom';
import { diplomas } from '../data';

function DiplomaDetail() {
  const { diplomaId } = useParams();
  const diploma = diplomas.find(d => d.id === diplomaId);

  if (!diploma) return <p>Diploma not found.</p>;

  return (
    <div>
      <h2>{diploma.name}</h2>
      <p>{diploma.description}</p>

      <h3>Modules</h3>
      <ul>
        {diploma.modules.map(module => (
          <li key={module.id}>
            <Link to={`/diplomas/${diploma.id}/${module.id}`}>
              {module.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiplomaDetail;