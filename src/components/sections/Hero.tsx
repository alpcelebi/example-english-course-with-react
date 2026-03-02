import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { ROUTES } from '../../lib/constants';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-kuzemSky/40">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-kuzemRed/5 rounded-full blur-3xl animate-blob" />
                <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-kuzemTeal/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-kuzemYellow/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <Container className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8 text-center lg:text-left animate-slide-up">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kuzemTeal/10 border border-kuzemTeal/20">
                            <Sparkles className="h-4 w-4 text-kuzemTeal" />
                            <span className="text-sm font-semibold text-kuzemTeal">2025-2026 Registrations Open</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-ink leading-[1.1] tracking-tight">
                            Your Child
                            <br />
                            <span className="gradient-text">Will Love</span>
                            <br />
                            English!
                        </h1>

                        <p className="text-lg lg:text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            English with games, speaking-focused, fun approach. Future-ready generations with modern language education.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Button size="lg" asChild className="btn-shine shadow-lg shadow-kuzemRed/20 hover:shadow-kuzemRed/40 transition-shadow">
                                <Link to={ROUTES.COURSES}>
                                    Discover Programs <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                                    Contact via WhatsApp
                                </a>
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white" />
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-slate-500">500+ Happy Students</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-sm font-medium text-slate-500">Limited Quota</span>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none animate-fade-in">
                        <div className="relative">
                            {/* Decorative elements behind image */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-kuzemRed/20 via-kuzemYellow/20 to-kuzemTeal/20 rounded-[3rem] blur-2xl opacity-60" />

                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-glass-md border-2 border-white/50">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/hero.jpg`}
                                    alt="Happy children learning English"
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                            </div>

                            {/* Floating cards */}
                            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-glass border border-white/40 animate-float">
                                <p className="font-heading font-bold text-ink text-base">🎉 First Lesson Free!</p>
                            </div>
                            <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-glass border border-white/40 animate-float" style={{ animationDelay: '1s' }}>
                                <p className="text-sm font-bold text-kuzemTeal">⭐ 4.9/5 Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
