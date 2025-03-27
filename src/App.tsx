import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './app/contexts/AuthContext';
import { PrivateRoute } from './app/hooks/PrivateRoute';
import PatientSummaryPage from './components/patients/PatientSummaryPage';
import CreateUserPage from './pages/admin/CreateUserPage';
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/Dashboard';
import './styles/global.scss';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/patients/:id" element={<PatientSummaryPage />} />
            <Route path="/admin/create-user" element={<CreateUserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;