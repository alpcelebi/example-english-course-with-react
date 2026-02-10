import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { cn } from '../../lib/cn';
import { CONTACT_INFO, ROUTES } from '../../lib/constants';

const NAV_LINKS = [
    { href: ROUTES.HOME, label: "Ana Sayfa" },
    { href: ROUTES.COURSES, label: "Programlar" },
    { href: ROUTES.ABOUT, label: "Hakkımızda" },
    { href: ROUTES.GALLERY, label: "Galeri" },
    { href: ROUTES.FAQ, label: "S.S.S." },
    { href: ROUTES.CONTACT, label: "İletişim" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-glass py-3 border-b border-white/20"
                    : "bg-transparent py-5"
            )}
        >
            <Container className="flex items-center justify-between">
                {/* LOGO */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="relative h-11 w-11 rounded-2xl bg-gradient-to-br from-kuzemRed to-rose-600 flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg shadow-kuzemRed/20 group-hover:shadow-kuzemRed/40 transition-all duration-300 group-hover:scale-105">
                        K
                        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-heading font-bold text-ink leading-none tracking-tight">
                            Kuzem
                        </span>
                        <span className="text-[10px] font-medium text-slate-400 tracking-[0.2em] uppercase">
                            Eğitim Kurumları
                        </span>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden lg:flex items-center gap-1">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300",
                                location.pathname === link.href
                                    ? "text-kuzemRed bg-red-50"
                                    : "text-slate-600 hover:text-ink hover:bg-slate-50"
                            )}
                        >
                            {link.label}
                            {location.pathname === link.href && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-kuzemRed rounded-full" />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* ACTIONS */}
                <div className="hidden lg:flex items-center gap-3">
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-kuzemTeal transition-colors px-3 py-2 rounded-xl hover:bg-teal-50">
                        <Phone className="h-4 w-4" />
                        {CONTACT_INFO.phone}
                    </a>
                    <Button asChild size="sm" className="rounded-xl shadow-lg shadow-kuzemRed/20 hover:shadow-kuzemRed/30">
                        <Link to={ROUTES.CONTACT}>Kayıt Ol</Link>
                    </Button>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="lg:hidden p-2.5 text-ink rounded-xl hover:bg-slate-100 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </Container>

            {/* MOBILE MENU */}
            <div className={cn(
                "lg:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden",
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            )}>
                <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-glass-md p-6 space-y-2">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={cn(
                                "block text-base font-medium px-4 py-3 rounded-xl transition-all",
                                location.pathname === link.href
                                    ? "text-kuzemRed bg-red-50"
                                    : "text-slate-600 hover:bg-slate-50"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-slate-100 space-y-3">
                        <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-slate-600 font-medium px-4">
                            <Phone className="h-4 w-4" /> {CONTACT_INFO.phone}
                        </a>
                        <Button className="w-full" asChild>
                            <Link to={ROUTES.CONTACT}>Hemen Kayıt Ol</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
