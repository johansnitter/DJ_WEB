import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react'; // Necesario para abrir/cerrar el menú en celular

export default function Navbar() {
    // Estado para controlar si el menú de celular está abierto o cerrado
    const [menuAbierto, setMenuAbierto] = useState(false);

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-primary border-b-2 border-primary pb-1 font-label-md text-label-md transition-all block md:inline-block"
            : "text-on-surface-variant hover:text-on-surface border-b-2 border-transparent pb-1 transition-all font-label-md text-label-md block md:inline-block";

    // Función para cerrar el menú cuando le pican a un link en el celular
    const cerrarMenu = () => setMenuAbierto(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_40px_rgba(232,179,255,0.1)]">
            <div className="flex justify-between items-center w-full px-4 md:px-16 py-3 md:py-4 mx-auto">
                
                {/* Logo: Más chico en móvil (text-lg) y forzado a no romperse (whitespace-nowrap) */}
                <Link to="/" className="font-headline-md text-xl md:text-3xl font-black tracking-tighter text-on-surface dark:text-on-surface hover:text-primary transition-colors whitespace-nowrap">
                    GDL PRODUCTION
                </Link>

                {/* Menú de Escritorio (Oculto en celulares) */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink className={navLinkClass} to="/">Servicios</NavLink>
                    <NavLink className={navLinkClass} to="/equipo">Equipo</NavLink>
                    <NavLink className={navLinkClass} to="/blog">Blog</NavLink>
                    <NavLink className={navLinkClass} to="/login">Admin</NavLink>
                </div>

                {/* Botones de la derecha */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    {/* WhatsApp (Solo visible en PC) */}
                    <a
                        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:block px-6 py-2 rounded-full border border-primary text-primary font-label-md text-label-md hover:bg-white/5 transition-all"
                    >
                        WhatsApp
                    </a>

                    {/* Agenda tu cita: Más compacto en celular (px-3 py-1.5, texto más chico) */}
                    <Link 
                        to="/reserva" 
                        className="bg-primary text-on-primary-container px-3 py-2 md:px-6 md:py-2 rounded-full font-label-md text-xs md:text-sm active:scale-95 transition-all duration-200 ease-in-out font-bold whitespace-nowrap"
                    >
                        Agenda cita
                    </Link>

                    {/* Botón de Menú Hamburguesa (Solo visible en celular) */}
                    <button 
                        onClick={() => setMenuAbierto(!menuAbierto)}
                        className="md:hidden text-white p-2 focus:outline-none"
                    >
                        {/* Icono de 3 rayitas que cambia a una 'X' cuando se abre */}
                        {menuAbierto ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Menú Desplegable para Celulares */}
            {menuAbierto && (
                <div className="md:hidden bg-surface dark:bg-[#121212] border-t border-white/10 px-4 py-4 shadow-2xl flex flex-col space-y-4">
                    <NavLink onClick={cerrarMenu} className={navLinkClass} to="/">Servicios</NavLink>
                    <NavLink onClick={cerrarMenu} className={navLinkClass} to="/equipo">Equipo</NavLink>
                    <NavLink onClick={cerrarMenu} className={navLinkClass} to="/blog">Blog</NavLink>
                    
                    <a
                        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary font-label-md text-label-md py-2 border-b border-white/5"
                    >
                        Mandar WhatsApp
                    </a>
                </div>
            )}
        </nav>
    );
}