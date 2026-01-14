import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { diplomas } from '../data';

function Register() {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const [values, setValues] = useState({
    name: '',
    email: '',
    diplomaId: searchParams.get('diploma') || '',
    moduleId: searchParams.get('module') || '',
  });

  const selectedDiploma = diplomas.find(d => d.id === values.diplomaId);
  const modules = selectedDiploma?.modules || [];

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'diplomaId' ? { moduleId: '' } : {}),
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <h1>Thank you, {values.name}!</h1>
        <p>
          Your interest in {selectedDiploma?.name || 'the selected diploma'} has
          been recorded.
        </p>
        <p>We will contact you at {values.email}.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Register Your Interest</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Full name
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Diploma
            <select
              name="diplomaId"
              value={values.diplomaId}
              onChange={handleChange}
              required
            >
              <option value="">Select a diploma</option>
              {diplomas.map(d => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label>
            Module
            <select
              name="moduleId"
              value={values.moduleId}
              onChange={handleChange}
              required
              disabled={!values.diplomaId}
            >
              <option value="">Select a module</option>
              {modules.map(m => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;