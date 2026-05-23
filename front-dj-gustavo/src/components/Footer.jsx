import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleServicios = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

    return (
        <footer className="w-full py-16 bg-surface border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Marca */}
                <div className="max-w-xs">
                    <Link to="/" className="font-headline-md text-2xl font-black text-on-surface tracking-tighter hover:text-primary transition-colors">
                        GDL PRODUCTION
                    </Link>
                    <p className="text-base text-on-surface-variant mt-4">
                        Elevando la experiencia sonora y visual en la Ciudad de México desde 2018.
                    </p>
                </div>

                {/* Enlaces */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                    <div className="flex flex-col space-y-4">
                        <span className="text-sm text-on-surface font-bold uppercase tracking-widest">Navegación</span>
                        <a
                            href="#servicios"
                            onClick={handleServicios}
                            className="text-base text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                        >
                            Servicios
                        </a>
                        <Link
                            to="/equipo"
                            className="text-base text-on-surface-variant hover:text-on-surface transition-colors"
                        >
                            Equipo
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <span className="text-sm text-on-surface font-bold uppercase tracking-widest">Legal</span>
                        <a className="text-base text-on-surface-variant hover:text-on-surface transition-colors" href="#">Términos</a>
                        <a className="text-base text-on-surface-variant hover:text-on-surface transition-colors" href="#">Privacidad</a>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <span className="text-sm text-on-surface font-bold uppercase tracking-widest">Social</span>
                        <a
                            className="text-base text-on-surface-variant hover:text-secondary transition-colors"
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                        <a
                            className="text-base text-on-surface-variant hover:text-secondary transition-colors"
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Facebook
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-4 md:px-16 mt-16 pt-8 border-t border-white/5 text-center md:text-left">
                <span className="text-xs text-on-surface-variant opacity-50 uppercase tracking-[0.2em]">
                    © 2026 GDL PRODUCTION. Diseñado para situaciones de alta intensidad.
                </span>
            </div>
        </footer>
    );
}