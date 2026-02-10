import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { SectionHeader } from '../components/layout/SectionHeader';
import { Button } from '../components/ui/Button';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../lib/constants';

export function Contact() {
    return (
        <>
            <Navbar />
            <main className="pt-24 pb-20 bg-gradient-to-b from-slate-50 to-white min-h-screen">
                <Container>
                    <SectionHeader
                        badge="Bize Ulaşın"
                        title="İletişim"
                        description="Bize ulaşarak detaylı bilgi alabilirsiniz."
                    />

                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-card-hover transition-all duration-500 hover:border-transparent">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 bg-gradient-to-br from-kuzemRed to-rose-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-kuzemRed/20">
                                        <Phone className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-lg mb-1 text-ink">Telefon & WhatsApp</h3>
                                        <p className="text-slate-500 text-sm mb-4">Hafta içi ve Cumartesi 09:00 - 18:00 arası bize ulaşabilirsiniz.</p>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Button asChild variant="default" size="sm">
                                                <a href={SOCIAL_LINKS.call}>Hemen Ara</a>
                                            </Button>
                                            <Button asChild variant="whatsapp" size="sm">
                                                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp'tan Yaz</a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-card-hover transition-all duration-500 hover:border-transparent">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 bg-gradient-to-br from-kuzemTeal to-teal-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-kuzemTeal/20">
                                        <MapPin className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-lg mb-1 text-ink">Adres</h3>
                                        <p className="text-slate-500 text-sm mb-4">{CONTACT_INFO.address}</p>
                                        <Button asChild variant="outline" size="sm">
                                            <a href={CONTACT_INFO.mapsEmbedUrl} target="_blank" rel="noopener noreferrer">
                                                Yol Tarifi Al <ExternalLink className="ml-2 h-3 w-3" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-card-hover transition-all duration-500 hover:border-transparent">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 bg-gradient-to-br from-amber-400 to-kuzemYellow rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-kuzemYellow/20">
                                        <Clock className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-lg mb-1 text-ink">Çalışma Saatleri</h3>
                                        <p className="text-slate-500 text-sm">{CONTACT_INFO.workingHours}</p>
                                        <p className="text-slate-400 text-xs mt-1">Pazar günleri kapalıyız.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-3xl overflow-hidden h-[400px] lg:h-auto bg-slate-100 border border-slate-200 shadow-card">
                            <iframe
                                src={CONTACT_INFO.mapsEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Kuzem Konum"
                            ></iframe>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
