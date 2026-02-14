import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

const STEPS = [
    {
        step: "01",
        title: "Level Assessment",
        description: "We determine the most suitable class for your child with a free trial lesson and level assessment.",
        gradient: "from-kuzemRed to-rose-500",
    },
    {
        step: "02",
        title: "Personalized Plan",
        description: "We create an education plan focused on games and activities suitable for age groups and goals.",
        gradient: "from-kuzemYellow to-amber-400",
    },
    {
        step: "03",
        title: "Continuous Tracking",
        description: "We monitor progress step by step with development reports and parent information system.",
        gradient: "from-kuzemTeal to-teal-500",
    }
];

export function Method() {
    return (
        <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            <Container className="relative z-10">
                <SectionHeader
                    badge="Our Process"
                    title="Our Education Method"
                    description="Our proven 3-step roadmap for success."
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
