import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { SectionHeader } from '../components/layout/SectionHeader';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PROGRAMS } from '../data/programs';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/cn';

const CATEGORIES = [
    { id: 'all', label: 'All' },
    { id: 'kids', label: 'Kids (4-10)' },
    { id: 'teens', label: 'Teens (11-14)' },
    { id: 'adults', label: 'Adults' },
];

export function Courses() {
    const [filter, setFilter] = useState('all');

    const filteredPrograms = filter === 'all'
        ? PROGRAMS
        : PROGRAMS.filter(p => p.category === filter);

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-slate-50 to-white">
                <Container>
                    <SectionHeader
                        badge="Education"
                        title="Our Education Programs"
                        description="Choose the program suitable for your child's age and level."
                    />

                    {/* Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={cn(
                                    "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                                    filter === cat.id
                                        ? "bg-ink text-white shadow-lg"
                                        : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
                                )}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPrograms.map((program) => (
                            <Card key={program.id} className="flex flex-col h-full hover:shadow-card-hover transition-all duration-500 border-slate-100 hover:border-transparent">
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={`${import.meta.env.BASE_URL}${program.image.replace(/^\//, '')}`}
                                        alt={program.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                                    <Badge className="absolute top-4 right-4 bg-white/90 text-ink backdrop-blur-sm shadow-sm border-0 text-xs font-bold">
                                        {program.ageRange}
                                    </Badge>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl">{program.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-5">
                                    <p className="text-slate-500 text-sm leading-relaxed">{program.description}</p>

                                    <div className="space-y-3">
                                        <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Gains</h4>
                                        <ul className="space-y-2">
                                            {program.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <CheckCircle2 className="h-4 w-4 text-kuzemTeal shrink-0 mt-0.5" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100">
                                        <span className="block text-xs text-slate-400 mb-1 font-medium">Lesson Duration</span>
                                        <span className="font-bold text-ink text-sm">{program.duration}</span>
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-4 border-t border-slate-100">
                                    <Button asChild className="w-full" variant="whatsapp">
                                        <a href={`https://wa.me/905551234567?text=Hello, I want to get price information for ${program.title}.`} target="_blank" rel="noopener noreferrer">
                                            Get Price via WhatsApp
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
