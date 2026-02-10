import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { TESTIMONIALS } from '../../data/testimonials';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
    return (
        <section className="section-padding bg-gradient-to-b from-white to-slate-50">
            <Container>
                <SectionHeader
                    badge="Referanslar"
                    title="Velilerimiz Ne Diyor?"
                    description="Yüzlerce mutlu öğrenci ve velimizin deneyimleri."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.id} className="group relative bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-card-hover hover:border-transparent transition-all duration-500">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(s => (
                                    <Star key={s} className="h-4 w-4 fill-kuzemYellow text-kuzemYellow" />
                                ))}
                            </div>

                            <Quote className="absolute top-8 right-8 text-slate-100 h-16 w-16 group-hover:text-kuzemTeal/10 transition-colors duration-500" />

                            <p className="text-slate-600 mb-6 leading-relaxed relative z-10">
                                "{t.comment}"
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                                <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-slate-100" />
                                <div>
                                    <h4 className="font-bold text-ink text-sm">{t.name}</h4>
                                    <span className="text-xs text-slate-400 font-medium">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
