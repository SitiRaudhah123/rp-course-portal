import "./App.css";
import Diplomas from "./pages/Diplomas";
import DiplomaDetail from "./pages/DiplomaDetail";
import ModuleDetail from "./pages/ModuleDetail";
import Register from "./pages/Register";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import rpLogo from "./assets/rp-logo.png"; 

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="site-header">
          <div className="container header-inner">
            <div className="brand">
              <img
                src={rpLogo}
                alt="Republic Polytechnic logo"
                className="rp-logo"
              />
              <span className="logo-text">Course Enrolment Portal</span>
            </div>
            <nav>
              <a href="/diplomas">Diplomas</a>
              <a href="/register">Register</a>
            </nav>
          </div>
        </header>

        <main className="container">
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
        </main>

        <footer className="site-footer">
          <div className="container">
            &copy; {new Date().getFullYear()} Republic Polytechnic – School of
            Infocomm
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;