import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './features/pagas/auth/Login';
import Registration from './features/pagas/auth/Registration';
import Front from './features/pagas/Common/front';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}
