import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Container } from './Container';
import { CONTACT_INFO, ROUTES, SOCIAL_LINKS } from '../../lib/constants';

export function Footer() {
    return (
        <footer className="relative bg-ink text-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <Container className="relative z-10">
                {/* Main Footer */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 lg:py-20">
                    {/* Brand */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-kuzemRed to-rose-600 flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg">
                                K
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-heading font-bold leading-none">Example</span>
                                <span className="text-[10px] font-medium text-white/40 tracking-[0.2em] uppercase">English Course</span>
                            </div>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Best English education for your children's future. We raise confident individuals who learn while having fun.
                        </p>
                        <div className="flex gap-3">
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-kuzemRed hover:text-white hover:border-kuzemRed transition-all duration-300">
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                                <Facebook className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/40 mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { to: ROUTES.COURSES, label: "Education Programs" },
                                { to: ROUTES.ABOUT, label: "About Us" },
                                { to: ROUTES.GALLERY, label: "Gallery" },
                                { to: ROUTES.FAQ, label: "FAQ" },
                                { to: ROUTES.CONTACT, label: "Contact" },
                            ].map(link => (
                                <li key={link.to}>
                                    <Link to={link.to} className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                                        {link.label}
                                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/40 mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-kuzemRed shrink-0 mt-0.5" />
                                <span className="text-white/60 text-sm">{CONTACT_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-kuzemRed shrink-0" />
                                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-white/60 hover:text-white transition-colors text-sm">{CONTACT_INFO.phone}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-kuzemRed shrink-0" />
                                <a href="mailto:info@kuzem.com" className="text-white/60 hover:text-white transition-colors text-sm">info@kuzem.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="rounded-2xl overflow-hidden h-48 bg-white/5 border border-white/10 relative">
                        <iframe
                            src={CONTACT_INFO.mapsEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-sm">
                        &copy; {new Date().getFullYear()} Example English Course. All rights reserved.
                    </p>
                    <p className="text-white/20 text-xs">
                        ❤️ Designed with love
                    </p>
                </div>
            </Container>
        </footer>
    );
}
