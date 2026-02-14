import { Link } from 'react-router-dom';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { AccordionItem } from '../ui/Accordion';
import { Button } from '../ui/Button';
import { FAQ_ITEMS } from '../../data/faq';
import { ROUTES } from '../../lib/constants';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function FAQPreview() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const featuredFaqs = FAQ_ITEMS.slice(0, 3);

    return (
        <section className="section-padding bg-white">
            <Container className="max-w-4xl">
                <SectionHeader
                    badge="FAQ"
                    title="Frequently Asked Questions"
                    description="You can find answers to your questions here."
                />

                <div className="bg-slate-50/80 p-6 md:p-8 rounded-3xl mb-10 border border-slate-100">
                    {featuredFaqs.map((item, idx) => (
                        <AccordionItem
                            key={idx}
                            title={item.question}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        >
                            <p className="text-slate-500 leading-relaxed">{item.answer}</p>
                        </AccordionItem>
                    ))}
                </div>

                <div className="text-center">
                    <Button asChild variant="ghost" className="text-kuzemTeal hover:bg-kuzemTeal/5">
                        <Link to={ROUTES.FAQ}>
                            View All Questions <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
