import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { CONTACT_INFO } from '../../lib/constants';

export function CTA() {
    return (
        <section className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-ink via-slate-900 to-ink" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-kuzemRed/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-kuzemTeal/10 rounded-full blur-3xl" />

            <Container className="relative z-10 py-24 lg:py-32 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
                    <Sparkles className="h-4 w-4 text-kuzemYellow" />
                    <span className="text-sm font-semibold text-white/80">Sınırlı Kontenjan</span>
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight text-balance">
                    Çocuğunuzun Geleceğine
                    <br />
                    <span className="text-kuzemYellow">Yatırım Yapın</span>
                </h2>

                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                    Erken kayıt avantajlarından yararlanmak ve çocuğunuzun yerini ayırtmak için hemen bizimle iletişime geçin.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild className="text-lg h-14 px-8 rounded-2xl shadow-lg shadow-kuzemYellow/20">
                        <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
                            <Phone className="mr-2 h-5 w-5" /> Hemen Ara
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg h-14 px-8 rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40" asChild>
                        <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer">
                            WhatsApp'tan Yaz <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
