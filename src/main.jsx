
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartProvider from './Contexts/CartProvider.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'


createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>
);
