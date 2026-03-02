import { Link } from 'react-router-dom';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { PROGRAMS } from '../../data/programs';
import { ROUTES } from '../../lib/constants';

export function Programs() {
    const featuredPrograms = PROGRAMS.slice(0, 3);

    return (
        <section className="section-padding bg-white">
            <Container>
                <SectionHeader
                    badge="Our Programs"
                    title="Education Programs"
                    description="Meet our curriculum specially prepared for every age group."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {featuredPrograms.map((program) => (
                        <div key={program.id} className="group relative bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-card-hover hover:border-transparent transition-all duration-500">
                            {/* Image */}
                            <div className="h-52 overflow-hidden relative">
                                <img
                                    src={`${import.meta.env.BASE_URL}${program.image.replace(/^\//, '')}`}
                                    alt={program.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                                <div className="absolute top-4 right-4">
                                    <Badge variant="secondary" className="text-xs font-bold bg-white/90 backdrop-blur-sm text-ink shadow-sm border-0">
                                        {program.ageRange}
                                    </Badge>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-heading font-bold text-ink group-hover:text-kuzemTeal transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                    {program.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm text-slate-400">
                                    <Calendar className="h-4 w-4" />
                                    <span>{program.duration}</span>
                                </div>
                                <div className="pt-2">
                                    <Button asChild className="w-full group/btn" variant="outline">
                                        <a href={`https://wa.me/905551234567?text=Hello, I want to get information about ${program.title}.`} target="_blank" rel="noopener noreferrer">
                                            Get Detailed Info
                                            <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button asChild size="lg" className="btn-shine shadow-lg shadow-kuzemRed/20">
                        <Link to={ROUTES.COURSES}>
                            View All Programs <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
