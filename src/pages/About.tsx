import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { SectionHeader } from '../components/layout/SectionHeader';
import { CheckCircle2, Award, Users, Heart } from 'lucide-react';

const STATS = [
    { value: '500+', label: 'Happy Students', icon: Heart },
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '30+', label: 'Expert Instructors', icon: Users },
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
                                    src="/kuzemdilegitim-website/images/about.jpg"
                                    alt="Kurumsal"
                                    className="relative rounded-3xl shadow-glass-md w-full object-cover aspect-[4/3]"
                                />
                            </div>
                            <div>
                                <SectionHeader title="About Us" description="Our approach that makes a difference in education." align="left" className="mb-8" badge="Who We Are?" />
                                <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                                    As Example English Course, we turn the language learning process of children from a lesson into a fun journey of discovery. Since 2010, we have introduced thousands of students to English.
                                </p>
                                <p className="text-slate-500 mb-8 text-lg leading-relaxed">
                                    We aim to maximize every child's potential with modern educational materials, technology-supported classrooms, and our expert staff with pedagogical formation.
                                </p>

                                <h3 className="font-heading font-bold text-xl mb-4 text-ink">Our Values</h3>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {["Student Focus", "Continuous Improvement", "Trust and Transparency", "Innovation"].map((item, idx) => (
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
