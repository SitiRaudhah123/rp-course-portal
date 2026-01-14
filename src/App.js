import './App.css';
import Diplomas from './pages/Diplomas';
import DiplomaDetail from './pages/DiplomaDetail';
import ModuleDetail from './pages/ModuleDetail';
import Register from './pages/Register';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/diplomas" replace />} />

        <Route path="/diplomas" element={<Diplomas />} />

        <Route path="/diplomas/:diplomaId" element={<DiplomaDetail />} />

        <Route
          path="/diplomas/:diplomaId/:moduleId"
          element={<ModuleDetail />}
        />

        <Route path="/register" element={<Register />} />

        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;