import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './features/pagas/auth/Login';
import Registration from './features/pagas/auth/Registration';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}
