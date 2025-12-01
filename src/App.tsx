import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Home, 
  Admin, 
  Cart, 
  Checkout, 
  Login, 
  Dashboard,
  About,
  Contact,
  Download
} from './pages';
import { ThemeProvider, LanguageProvider, CartProvider, AuthProvider } from './context';

function App() {
  return (
    <BrowserRouter basename="/tawana-vpn-frontend">
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <CartProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/download" element={<Download />} />
              </Routes>
            </CartProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
