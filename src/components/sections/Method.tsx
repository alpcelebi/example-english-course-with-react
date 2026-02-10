import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

const STEPS = [
    {
        step: "01",
        title: "Seviye Belirleme",
        description: "Ücretsiz deneme dersi ve seviye tespiti ile çocuğunuz için en uygun sınıfı belirliyoruz.",
        gradient: "from-kuzemRed to-rose-500",
    },
    {
        step: "02",
        title: "Kişiselleştirilmiş Plan",
        description: "Yaş grubuna ve hedeflerine uygun, oyun ve aktivite ağırlıklı eğitim planını oluşturuyoruz.",
        gradient: "from-kuzemYellow to-amber-400",
    },
    {
        step: "03",
        title: "Sürekli Takip",
        description: "Gelişim raporları ve veli bilgilendirme sistemi ile ilerlemeyi adım adım izliyoruz.",
        gradient: "from-kuzemTeal to-teal-500",
    }
];

export function Method() {
    return (
        <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            <Container className="relative z-10">
                <SectionHeader
                    badge="Sürecimiz"
                    title="Eğitim Metodumuz"
                    description="Başarısı kanıtlanmış 3 adımlı yol haritamız."
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {STEPS.map((step, idx) => (
                        <div key={idx} className="relative group">
                            {/* Connector line */}
                            {idx < STEPS.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-[60%] w-full h-px bg-slate-200 z-0" />
                            )}

                            <div className="relative bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-card-hover transition-all duration-500 hover:border-transparent z-10">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-heading font-bold text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-3 text-ink">{step.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
