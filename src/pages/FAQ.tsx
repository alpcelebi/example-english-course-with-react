import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { SectionHeader } from '../components/layout/SectionHeader';
import { AccordionItem } from '../components/ui/Accordion';
import { FAQ_ITEMS } from '../data/faq';
import { cn } from '../lib/cn';

const CATEGORIES = ["All", "Registration", "Education", "Program", "Transportation"];

export function FAQ() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const filteredItems = activeCategory === "All"
        ? FAQ_ITEMS
        : FAQ_ITEMS.filter(item => item.category === activeCategory);

    return (
        <>
            <Navbar />
            <main className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
                <Container className="max-w-4xl">
                    <SectionHeader
                        badge="Help"
                        title="Frequently Asked Questions"
                        description="All details you are wondering about."
                    />

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 justify-center mb-12">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setOpenIndex(null);
                                }}
                                className={cn(
                                    "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                                    activeCategory === cat
                                        ? "bg-ink text-white shadow-lg"
                                        : "bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-100 shadow-card min-h-[400px]">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, idx) => (
                                <AccordionItem
                                    key={idx}
                                    title={item.question}
                                    isOpen={openIndex === idx}
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                >
                                    <p>{item.answer}</p>
                                </AccordionItem>
                            ))
                        ) : (
                            <p className="text-center text-slate-400 py-12">No questions found in this category.</p>
                        )}
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
