import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Admin } from './pages';

function App() {
  return (
    <BrowserRouter basename="/tawana-vpn-frontend">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
