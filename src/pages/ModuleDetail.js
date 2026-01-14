import { useParams, Link } from 'react-router-dom';
import { diplomas } from '../data';

function ModuleDetail() {
  const { diplomaId, moduleId } = useParams();
  const diploma = diplomas.find(d => d.id === diplomaId);
  const module = diploma?.modules.find(m => m.id === moduleId);

  if (!diploma || !module) return <p>Module not found.</p>;

  return (
    <div>
      <h3>{module.name}</h3>
      <p>{module.description}</p>
      <Link to={`/register?diploma=${diploma.id}&module=${module.id}`}>
        Register interest
      </Link>
    </div>
  );
}

export default ModuleDetail;