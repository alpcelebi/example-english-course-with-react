import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { SectionHeader } from '../components/layout/SectionHeader';
import { CheckCircle2, Award, Users, Heart } from 'lucide-react';

const STATS = [
    { value: '500+', label: 'Mutlu Öğrenci', icon: Heart },
    { value: '15+', label: 'Yıllık Deneyim', icon: Award },
    { value: '30+', label: 'Uzman Eğitmen', icon: Users },
];

export function About() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                {/* Hero Banner */}
                <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-kuzemSky/30 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
                    <Container className="relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-kuzemRed/10 to-kuzemTeal/10 rounded-[3rem] blur-2xl opacity-60" />
                                <img
                                    src="/images/about.jpg"
                                    alt="Kurumsal"
                                    className="relative rounded-3xl shadow-glass-md w-full object-cover aspect-[4/3]"
                                />
                            </div>
                            <div>
                                <SectionHeader title="Hakkımızda" description="Eğitimde fark yaratan yaklaşımımız." align="left" className="mb-8" badge="Biz Kimiz?" />
                                <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                                    Kuzem Eğitim Kurumları olarak, çocukların dil öğrenim sürecini bir ders olmaktan çıkarıp, eğlenceli bir keşif yolculuğuna dönüştürüyoruz. 2010 yılından bu yana, binlerce öğrenciyi İngilizce ile tanıştırdık.
                                </p>
                                <p className="text-slate-500 mb-8 text-lg leading-relaxed">
                                    Modern eğitim materyalleri, teknoloji destekli sınıflar ve pedagojik formasyona sahip uzman kadromuzla, her çocuğun potansiyelini en üst seviyeye çıkarmayı hedefliyoruz.
                                </p>

                                <h3 className="font-heading font-bold text-xl mb-4 text-ink">Değerlerimiz</h3>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {["Öğrenci Odaklılık", "Sürekli Gelişim", "Güven ve Şeffaflık", "Yenilikçilik"].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 font-medium text-ink bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                                            <CheckCircle2 className="text-kuzemTeal h-5 w-5 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Stats */}
                <section className="py-16 bg-white">
                    <Container>
                        <div className="grid grid-cols-3 gap-8">
                            {STATS.map((stat, idx) => (
                                <div key={idx} className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100">
                                    <stat.icon className="h-8 w-8 text-kuzemRed mx-auto mb-4" />
                                    <div className="text-4xl font-heading font-bold text-ink mb-2">{stat.value}</div>
                                    <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
