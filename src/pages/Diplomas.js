import { Link } from 'react-router-dom';
import { diplomas } from '../data';

function Diplomas() {
  return (
    <div>
      <h1>School of Infocomm Diplomas</h1>
      <ul>
        {diplomas.map(diploma => (
          <li key={diploma.id}>
            <Link to={`/diplomas/${diploma.id}`}>
              {diploma.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Diplomas;