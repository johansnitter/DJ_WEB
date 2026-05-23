import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Equipo from "./pages/Equipo.jsx";
import Reserva from "./pages/Reserva.jsx";
import Blog from './components/Blog';
import ArticuloCompleto from './components/Art';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <div className="pt-24 min-h-screen bg-slate-950"> 
            <Routes>
              {/* Ruta principal */}
              <Route path="/" element={<Home />} />

              {/* Ruta de inicio de sesión */}
              <Route path="/login" element={<Login />} />

              {/* Ruta del panel VIP */}
              <Route path="/admin" element={<Admin />} />

              {/* Ruta de Equipo */}
              <Route path="/equipo" element={<Equipo />} />
              
              {/* Ruta de Reserva */}
              <Route path="/reserva" element={<Reserva />} />
              
              {/* Ruta del Blog */}
              <Route path="/blog" element={<Blog />} />
              
              {/* Ruta Articulo */}
              <Route path="/blog/:id" element={<ArticuloCompleto />} /> 
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;