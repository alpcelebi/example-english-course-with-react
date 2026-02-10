import { Gamepad2, Users, Award, ShieldCheck } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

const FEATURES = [
    {
        icon: Gamepad2,
        title: "Oyunlaştırma",
        description: "Sıkıcı gramer kuralları yerine oyunlarla doğal öğrenme süreci.",
        gradient: "from-rose-500 to-kuzemRed",
        bg: "bg-red-50",
    },
    {
        icon: Users,
        title: "Küçük Gruplar",
        description: "Maksimum 8-10 kişilik butik sınıflarda birebir ilgi.",
        gradient: "from-kuzemTeal to-teal-500",
        bg: "bg-teal-50",
    },
    {
        icon: Award,
        title: "Uzman Eğitmenler",
        description: "Pedagojik formasyona sahip, çocuk dil eğitiminde uzman kadro.",
        gradient: "from-amber-400 to-kuzemYellow",
        bg: "bg-amber-50",
    },
    {
        icon: ShieldCheck,
        title: "Güvenli Ortam",
        description: "Çocuklarınızın güvenliği ve konforu için tasarlanmış modern sınıflar.",
        gradient: "from-emerald-500 to-green-500",
        bg: "bg-emerald-50",
    }
];

export function Features() {
    return (
        <section className="section-padding bg-white relative">
            <Container>
                <SectionHeader
                    badge="Avantajlarımız"
                    title="Neden Kuzem?"
                    description="Bizi diğerlerinden ayıran özelliklerimiz ve eğitim felsefemiz."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURES.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 rounded-3xl bg-white border border-slate-100 hover:border-transparent hover:shadow-card-hover transition-all duration-500"
                        >
                            {/* Gradient bg on hover */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="text-lg font-heading font-bold text-ink mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
